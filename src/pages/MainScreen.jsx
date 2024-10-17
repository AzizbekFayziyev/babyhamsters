import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const MainScreen = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center justify-center min-h-[90dvh] gap-24 animated-page">
      <img className="mt-20" width={180} src="/logo.png" alt="logo" />

      <h1 className="text-center text-lg font-semibold">
        🖐 Hey! <br /> You've been in Telegram for a while, <br /> it's time to
        get rewarded!
      </h1>

      <div className="w-full mt-auto flex justify-center">
        <Button onClick={() => navigate("/verfy")}>Wow,let’s go!</Button>
      </div>
    </main>
  );
};

export default MainScreen;
