import React from 'react';

export function CalendarModule(): JSX.Element {
  const today = new Date().toDateString();
  return (
    <div>
      <p className="text-sm text-gray-600">Today is</p>
      <p className="text-lg font-medium">{today}</p>
    </div>
  );
}


