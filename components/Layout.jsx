import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "./Nav";

export default function Layout({ children }) {
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
  return (
    <div className="bg-blue-900  min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-1 mr-2 rounded-lg p-4 mb-2">
        {children}
      </div>
    </div>
  );
}
