import React from "react";

const Bg = ({rotated}) => {
  return (
    <img
      className={`w-full h-full fixed top-0 left-0 pointer-events-none object-cover ${rotated && 'rotate-180'}`}
      src="/bg.png"
      alt="background"
    />
  );
};

export default Bg;
