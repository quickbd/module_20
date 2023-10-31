"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function MyApp(params) {
  let session = useSession();
  let status = session.status;
  const router = useRouter();
  console.log(status);
  if (status != "authenticated") {
    // router.replace("/admin/login");
  } //else router.replace("/admin/myapp");

  return (
    <div className="container">
      <h2>My App </h2>
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
