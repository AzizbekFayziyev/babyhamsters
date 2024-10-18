import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verfy from "./pages/Verfy";
import Slide1 from "./pages/slides/Slide1";
import Slide2 from "./pages/slides/Slide2";
import MainScreen from "./pages/MainScreen";
import Home from "./pages/Home";
import Liderboard from "./pages/Liderboard";
import Friends from "./pages/Friends";
import Confetti from "react-confetti";

const App = () => {
  // confetti
  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const startConfetti = () => {
    setShowConfetti(true);
    setFadeOut(false);

    setTimeout(() => {
      setFadeOut(true);
    }, 3000);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  };

  // pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainScreen />,
      index: true,
    },
    {
      path: "/verfy",
      element: <Verfy />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/liderboard",
      element: <Liderboard />,
    },
    {
      path: "/friends",
      element: <Friends />,
    },
    {
      path: "/slide-1",
      element: <Slide1 />,
    },
    {
      path: "/slide-2",
      element: <Slide2 startConfetti={startConfetti} />,
    },
  ]);

  return (
    <div className="cnt relative">
      {/* Confetti effect */}
      {showConfetti && (
        <div  className={`fixed left-0 top-0 z-50 confetti-wrapper ${fadeOut ? "fade-out" : ""}`}>
          <Confetti />
        </div>
      )}
      {/* Pages */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
