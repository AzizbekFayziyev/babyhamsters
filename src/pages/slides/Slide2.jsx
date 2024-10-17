import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Slide2 = ({ startConfetti }) => {
  const navigate = useNavigate();

  const onComplete = () => {
    navigate("/home");

    startConfetti();
  };

  return (
    <div className="flex flex-col min-h-[90dvh] text-center animated-page">
      <div className="flex gap-3">
        <div className="w-full h-1 rounded-xl  bg-white"></div>

        <div className="w-full h-1 rounded-xl relative bg-gray overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            className="absolute left-0 top-0 h-full bg-white rounded-xl"
          ></motion.div>
        </div>
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
        <Button onClick={onComplete} isWhite>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Slide2;
