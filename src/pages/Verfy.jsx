import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const verfications = [
  "Account Age Verified",
  "Activity Level Analyzed",
  "Telegram Premium Checked",
  "OG Status Confirmed",
];

const Verfy = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-[90dvh] animated-page">
      <h1 className="title">
        Checking your <br /> account
      </h1>

      <div className="mt-5 z-10">
        {verfications.map((el, id) => (
          <div key={el} className="mt-5">
            <div className="flex items-center justify-between">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: id + 0.3 }}
                className="font-semibold text-lg"
              >
                {el}
              </motion.span>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: id + 0.8 }}
                width={20}
                src="/icons/check.svg"
                alt="check"
              />
            </div>

            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "linear", delay: id + 0.3 }}
              className="mr-auto w-full h-3 mt-4 bg-primary rounded-xl"
            />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 4 }}
        className="w-full mt-auto flex justify-center"
      >
        <Button onClick={() => navigate("/slide-1")}>Continue</Button>
      </motion.div>
    </div>
  );
};

export default Verfy;
