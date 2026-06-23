"use client";

import { useRouter } from "next/navigation";

export default function StoreDetailError({ error, reset }) {
  const router = useRouter();

  console.error(error);

  function handleGoHome() {
    reset();
    router.push("/");
  }

  return (
    <section>
      <h1>Something went wrong loading the store.</h1>
      <button onClick={handleGoHome}>Go to homepage</button>
    </section>
  );
}