"use client";
import Image from "next/image";
import { Button } from "@repo/ui/button";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button>Click Me</Button>

      <h1>
        Yha p tughe like landging page banana hai by own jaise wo lovable wala
        hai same waisa hi okkh!..
      </h1>

      <div>
        <div>
          <button
            className="border p-2 rounded-2xl"
            onClick={() => router.push("/signUp")}
          >
            SignUp
          </button>
        </div>

        <div>
          <button
            className="border p-2 rounded-2xl"
            onClick={() => router.push("/signIn")}
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
}
