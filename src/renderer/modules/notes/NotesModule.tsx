import React, { useEffect, useState } from 'react';

export function NotesModule(): JSX.Element {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<Array<{ id: number; content: string; createdAt: number }>>([]);

  useEffect(() => {
    (async () => {
      const port = await window.api.getServerPort();
      const res = await fetch(`http://localhost:${port}/api/notes`);
      setNotes(await res.json());
    })();
  }, []);

  async function saveNote(): Promise<void> {
    const port = await window.api.getServerPort();
    const res = await fetch(`http://localhost:${port}/api/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: note }),
    });
    if (res.ok) {
      const created = await res.json();
      setNotes((prev) => [created, ...prev]);
      setNote('');
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        className="border rounded p-2 w-full h-32"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write a note..."
      />
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{note.length} characters</span>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={saveNote} disabled={!note.trim()}>
          Save
        </button>
      </div>

      <ul className="divide-y">
        {notes.map((n) => (
          <li key={n.id} className="py-2">
            <div className="text-xs text-gray-500">{new Date(n.createdAt).toLocaleString()}</div>
            <div>{n.content}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}


