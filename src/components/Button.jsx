import React from "react";

const Button = ({ children, onClick, isWhite, isDark }) => {
  return (
    <button
      onClick={onClick}
      className={`${isDark ? 'text-white bg-dark-50' : isWhite ? 'bg-white text-black' : 'bg-primary'} rounded-[14px] active:opacity-80 transition-opacity py-4 px-6 font-bold w-full text-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
