//Utilities
import React from "react";
import { signOut } from "next-auth/react";

//Components

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="flex flex-col w-56 bg-gray-800 h-full items-center ">
      <div className="flex-grow w-full">
        <h1 className="text-center w-full mt-24 mb-10 font-semibold text-xl text-gray-300 border-b-2 border-gray-600 pb-2">{username}</h1>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex w-full gap-4 hover:bg-gray-200 hover:cursor-pointer">
            <img src="imgs/dashboard.svg" height={'40rem'} width={'40rem'} />
            <h2 className="text-xl align-text-top">Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <img src="imgs/artifical-intelligence.svg" height={'40rem'} width={'40rem'} />
            <h2 className="text-xl">AI-Generate</h2>
          </div>
          <div className="flex items-center gap-4">
            <img src="imgs/settings.svg" height={'40rem'} width={'40rem'} />
            <h2 className="text-xl">Settings</h2>
          </div>
        </div>
      </div>
      <button className="mt-auto mb-10 text-white bg-red-600 hover:bg-800 font-bold py-2 px-4 w-2/3 rounded-lg " onClick={() => signOut()}>Log Out</button>
    </nav>
  )
}

export default Navbar;
