import React from "react";
import { NavLink } from "react-router-dom";

const Appbar = () => {
  return (
    <nav className="fixed z-50 bottom-0 left-0 flex items-center justify-between w-full bg-dark p-4">
      <NavLink className="text-center flex flex-col items-center gap-1 opacity-50" to="/home">
        <img src="/icons/menu/1.svg" alt="home" />
        <span>Home</span>
      </NavLink>

      <NavLink className="text-center flex flex-col items-center gap-1 opacity-50" to="/liderboard">
        <img src="/icons/menu/2.svg" alt="leaderboard" />
        <span>Leaderboard</span>
      </NavLink>

      <NavLink className="text-center flex flex-col items-center gap-1 opacity-50" to="/friends">
        <img src="/icons/menu/1.svg" alt="friends" />
        <span>Friends</span>
      </NavLink>
    </nav>
  );
};

export default Appbar;
