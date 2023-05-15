import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex justify-center">
        <div className="text-center w-full">
          <button
            className="bg-white p-2 px-4 rounded-lg"
            onClick={() => signIn("google")}
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }
  return <div>Logged in {session.user.email}</div>;
}