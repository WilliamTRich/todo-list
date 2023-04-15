import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { signOut, getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: 'auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: User } = useCurrentUser();

  return (
    <>
      <h1>Hello</h1>
      <button className="h10 w-9 bg-white" onClick={() => signOut()}>Sign Out </button>
      <a>Logged in as: {User?.username}</a>
    </>
  );
}
