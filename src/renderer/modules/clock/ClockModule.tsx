import React, { useEffect, useState } from 'react';

export function ClockModule(): JSX.Element {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(id);
  }, []);

  return <div className="text-3xl font-mono">{time}</div>;
}


