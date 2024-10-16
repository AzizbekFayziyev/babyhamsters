import React from "react";
import Bg from "../../components/Bg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Slide2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[90dvh] text-center animated-page">
      <div className="flex gap-3">
        <div className="w-full h-1 rounded-xl  bg-white"></div>
        <div className="w-full h-1 rounded-xl  bg-white"></div>
      </div>

      <div className="mt-10">
        <h1 className="title mb-7">You are amazing!</h1>
        <h4 className="text-xl font-semibold">
          Here is your Baby Hamster reward
        </h4>
      </div>

      <img
        className="mt-8 mx-auto block"
        src="/logo.png"
        width={186}
        alt="logo"
      />

      <p className="font-semibold text-4xl mt-8">3,520</p>

      <p className="text-lg font-medium mt-12 mb-8">
        Thanks fot your time on Telegram 🤝
      </p>

      <div className="w-full mt-auto">
        <Button onClick={() => navigate("/home")} isWhite>
          Continue
        </Button>
      </div>

      <Bg />
    </div>
  );
};

export default Slide2;
