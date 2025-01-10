import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <a
          href="/api/auth/signin"
          className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {session.user?.name || "User"}!
      </h1>
      <p>Your email: {session.user?.email}</p>
      <a
        href="/api/auth/signout"
        className="px-6 py-3 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Sign Out
      </a>
    </div>
  );
}
