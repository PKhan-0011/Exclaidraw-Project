"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [roomId, setRoomId] = useState("");

  const router = useRouter();

  return (
    <div className={styles.page}>
      <input
        type="text"
        value={roomId}
        placeholder="Enter your rromId here"
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button
        onClick={() => {
          router.push(`room/${roomId}`);
        }}
      >
        Join room
      </button>
    </div>
  );
}

// Yha p like first kabhi bhi start karte hai project to test likhte hai okkh!
// and then backend and then frontend okkh!..
