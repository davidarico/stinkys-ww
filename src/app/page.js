"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  async function fetchFooData() {
    try {
      const response = await fetch('/api/foo');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchFooData();
  }, []);

  return (
    <div className="justify-items-center">
      <h1>Stinky&apos;s Werewolf Tracker</h1>
      <h2>App is still a work in progress</h2>
      <div>
        <button onClick={fetchFooData}>Refresh</button>
      </div>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}
