import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verfy from "./pages/Verfy";
import Slide1 from "./pages/slides/Slide1";
import Slide2 from "./pages/slides/Slide2";
import MainScreen from "./pages/MainScreen";
import Home from "./pages/Home";
import Liderboard from "./pages/Liderboard";
import Friends from "./pages/Friends";

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
    element: <Slide2 />,
  },
]);

const App = () => {
  return (
    <div className="cnt">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
