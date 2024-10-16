import React from "react";
import Bg from "../components/Bg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Verfy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[90dvh] animated-page">
      <h1 className="title">
        Checking your <br /> account
      </h1>

      <div className="mt-5 z-10">
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">Account Age Verified</span>
            <img width={20} src="/icons/check.svg" alt="check" />
          </div>

          <div className="w-full h-3 mt-4 bg-primary rounded-xl" />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">
              Activity Level Analyzed
            </span>
            <img width={20} src="/icons/check.svg" alt="check" />
          </div>

          <div className="w-full h-3 mt-4 bg-primary rounded-xl" />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">
              Telegram Premium Checked
            </span>
            <img width={20} src="/icons/check.svg" alt="check" />
          </div>

          <div className="w-full h-3 mt-4 bg-primary rounded-xl" />
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">OG Status Confirmed</span>
            <img width={20} src="/icons/check.svg" alt="check" />
          </div>

          <div className="w-full h-3 mt-4 bg-primary rounded-xl" />
        </div>
      </div>

      <div className="w-full mt-auto flex justify-center">
        <Button onClick={() => navigate("/slide-1")}>Continue</Button>
      </div>

      <Bg rotated />
    </div>
  );
};

export default Verfy;
