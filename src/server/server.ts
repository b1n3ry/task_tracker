import express, { Request, Response } from 'express';
import path from 'node:path';
import Database from 'better-sqlite3';

const DB_PATH = path.join(process.cwd(), 'db', 'app.db');

function initializeDatabase(): Database.Database {
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      createdAt INTEGER NOT NULL
    );
  `);
  return db;
}

export async function createServer(): Promise<number> {
  const app = express();
  app.use(express.json());

  const db = initializeDatabase();

  app.get('/api/health', (_: Request, res: Response) => {
    res.json({ ok: true });
  });

  app.get('/api/notes', (_: Request, res: Response) => {
    const rows = db.prepare('SELECT id, content, createdAt FROM notes ORDER BY createdAt DESC').all();
    res.json(rows);
  });

  app.post('/api/notes', (req: Request, res: Response) => {
    const content = String(req.body?.content ?? '').trim();
    if (!content) return res.status(400).json({ error: 'Content required' });
    const createdAt = Date.now();
    const info = db.prepare('INSERT INTO notes (content, createdAt) VALUES (?, ?)').run(content, createdAt);
    res.status(201).json({ id: info.lastInsertRowid, content, createdAt });
  });

  const server = await new Promise<import('http').Server>((resolve) => {
    const s = app.listen(0, () => resolve(s));
  });
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 0;
  return port;
}


