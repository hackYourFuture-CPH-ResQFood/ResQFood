"use client";

export default function StoreError({ error: _, reset }) {
  return (
    <main>
      <h1>Could not load store</h1>

      <p>Something went wrong while loading this store. Please try again.</p>

      <button onClick={reset}>Try again</button>
    </main>
  );
}
