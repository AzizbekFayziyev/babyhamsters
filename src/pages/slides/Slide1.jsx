import React from "react";
import Bg from "../../components/Bg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Slide1 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[90dvh] text-center animated-page">
      <div className="flex gap-3">
        <div className="w-full h-1 rounded-xl  bg-white"></div>
        <div className="w-full h-1 rounded-xl  bg-gray"></div>
      </div>

      <div className="mt-10">
        <h1 className="title mb-7">Elite member!</h1>
        <h4 className="text-xl font-semibold">You've joined Telegram</h4>
      </div>

      <div className="mt-8 z-10 relative grid place-content-center">
        <img width={300} src="/diamond.png" alt="diamond" />
        <span
          style={{ transform: "translate(-50%,-50%)" }}
          className="font-semibold  text-stroke text-[200px] absolute top-[50%] left-[50%]"
        >
          3
        </span>
      </div>

      <p className="font-semibold text-4xl mt-8">years ago</p>

      <p className="text-lg font-medium mt-12 mb-8">
        Your account number is #1820942515. You're in the Top 25% Telegram users
      </p>

      <div className="w-full mt-auto">
        <Button onClick={() => navigate("/slide-2")} isWhite>
          Continue
        </Button>
      </div>

      <Bg />
    </div>
  );
};

export default Slide1;
