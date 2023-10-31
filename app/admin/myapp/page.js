"use client";
import { signOut, useSession } from "next-auth/react";

export default function MyApp() {
  let session = useSession();

  return (
    <div className="container">
      <h2>My App</h2>
      <p>{JSON.stringify(session)}</p>
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="btn btn-danger"
      >
        Logout
      </button>
    </div>
  );
}
