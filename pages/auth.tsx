//Utilities
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

//Components
import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  //Use State's for form inputs
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //Router hook
  const router = useRouter();

  //Use State for Login/Reg
  const [variant, setVariant] = useState("login");

  //Function to change Login/Reg
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  //Login Function 
  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  //Register Function 
  const register = useCallback(async () => {
    try {
      await axios.post('api/register', {
        email,
        username,
        password
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password, login]);

  return (
    <main className="flex h-screen bg-gray-50">
      <div className="flex flex-col justify-center w-2/5 px-20 py-10">
        <div className="flex text-4xl leading-normal h-16 gap-3 text-green-800">
          <img src="imgs/ai-82.svg" alt="image description" />
          <h1 className="font-semibold align-baseline">AI Todo-List</h1>
        </div>
        <div className="mt-14">
          <h2 className="text-3xl text-green-800 font-semibold">
            Artificial Intelligence giving you a schedule so you don't have to
          </h2>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-gray-800 text-xl">
            {variant === "login" ? "Please log in" : "Create an account"}
          </h3>
          <Input
            id="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email}
            label="Email"
          />
          {variant === "register" ? (
            <Input
              id="username"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              value={username}
              label="Username"
            />
          ) : (
            ""
          )}
          <Input
            id="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type="password"
            value={password}
            label="Password"
          />
        </div>
        <button
          type="submit"
          onClick={variant === 'login' ? login : register}
          className="mt-4 text-white bg-green-600 hover:bg-green-800 font-bold py-2 px-4 w-1/5 rounded-lg"
        >
          {variant === "login" ? "Login" : "Register"}
        </button>
        <p className="text-neutral-500 mt-12">
          {variant === "login"
            ? "First time using Ai-Todo?"
            : "Already have an account?"}
          <span
            onClick={toggleVariant}
            className="text-black ml-1 hover:underline cursor-pointer"
          >
            {variant === "login" ? "Create an account." : "Sign In."}
          </span>
        </p>
      </div>
      <div className="flex w-3/5 border-l-2 border-black/60 bg-amber-100 justify-center items-center">
        <img
          src="imgs/artificial-intelligence-network.svg"
          className="object-scale-down w-3/5"
          alt="Splash screen"
        />
      </div>
    </main>
  );
};

export default Auth;
