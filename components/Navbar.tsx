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
      <h1 className="mt-24 font-semibold text-xl text-gray-300">{username}</h1>
      <div className="flex">
        <img src="imgs/dashboard.svg" height={'40rem'} width={'40rem'}/>
        <h2>Dashboard</h2>
      </div> 
      <div className="flex">
        <img src="imgs/artifical-intelligence.svg" height={'40rem'} width={'40rem'}/>
        <h2>AI-Generate</h2>
      </div>
      <div className="flex">
        <img src="imgs/settings.svg" height={'40rem'} width={'40rem'} />
        <h2>Settings</h2>
      </div>
      <button className="mt-4 text-white bg-red-600 hover:bg-800 font-bold py-2 px-4 w-2/3 rounded-lg justify-self-end" onClick={() => signOut()}>Log Out</button>
    </nav>
  )
}

export default Navbar;
