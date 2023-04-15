//Utilities
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

//Components
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

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

const Home = () => {
  const { data: User } = useCurrentUser();

  return (
    <>
      <Navbar username={User?.username}/> 
    </>
  );
}

export default Home;
