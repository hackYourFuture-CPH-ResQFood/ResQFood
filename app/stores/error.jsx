"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function StoresError({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  function handleGoHome() {
    reset();
    router.push("/");
  }

  return (
    <section>
      <h1>Something went wrong loading the stores.</h1>
      <Button onClick={handleGoHome}>Go to homepage</Button>
    </section>
  );
}