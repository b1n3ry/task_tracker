import React from 'react';
import { CalendarModule } from './calendar/CalendarModule';
import { NotesModule } from './notes/NotesModule';
import { ClockModule } from './clock/ClockModule';

export function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 shadow bg-white">
        <h1 className="text-2xl font-bold">Task Tracker</h1>
      </header>
      <main className="p-4 grid gap-4 md:grid-cols-3">
        <section className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Calendar</h2>
          <CalendarModule />
        </section>
        <section className="p-4 bg-white rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-2">Notes</h2>
          <NotesModule />
        </section>
        <section className="p-4 bg-white rounded shadow md:col-span-3">
          <h2 className="text-xl font-semibold mb-2">Clock</h2>
          <ClockModule />
        </section>
      </main>
    </div>
  );
}


