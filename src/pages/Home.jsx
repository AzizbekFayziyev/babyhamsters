import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Appbar from "../components/Appbar";
import { useNavigate } from "react-router-dom";
import AnimatedNumber from "../components/AnimatedNumber";

const rewardsData = [
  {
    icon: "/icons/rewards/1.svg",
    title: "Daily Check-in",
    price: "+800 BHM",
  },
  {
    icon: "/icons/rewards/2.svg",
    title: "Account age",
    price: "+10,800 BHM",
  },
  {
    icon: "/icons/rewards/3.svg",
    title: "Telegram Not Premium",
    price: "+2,500 BHM",
  },
];

const Home = () => {
  const [tasksData, setTasksData] = useState([
    {
      id: 1,
      icon: "/icons/tasks/1.svg",
      title: "Be a good $BHM Fan",
      price: "+50 BHM",
      score: 50,
      completed: false,
    },
    {
      id: 2,
      icon: "/icons/tasks/2.svg",
      title: "Subscribe to $BHM X.com",
      price: "+1,000 BHM",
      score: 1000,
      completed: false,
    },
    {
      id: 3,
      icon: "/icons/tasks/3.svg",
      title: "Invite 5 friends to $BHM",
      price: "+20,000 BHM",
      isBold: true,
      score: 20000,
      completed: false,
    },
    {
      id: 4,
      icon: "/icons/tasks/4.svg",
      title: "Add in Telegram name",
      price: "+2,500 BHM",
      score: 2500,
      completed: false,
    },
    {
      id: 5,
      icon: "/icons/tasks/5.svg",
      title: "Subscribe to $BHM channel",
      price: "+50 BHM",
      score: 50,
      completed: false,
    },
  ]);

  const navigate = useNavigate();

  const [score, setScore] = useState(67254);

  const onComplete = (id) => {
    setTasksData((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const onClaim = (score) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setScore((prev) => prev + score);
    }, 300);
  };

  return (
    <>
      <Appbar />
      <main className="min-h-[90vh] mb-20 animated-page">
        <div className="cursor-pointer" onClick={() => navigate("/slide-1")}>
          <img
            className="absolute w-full max-w-[440px] h-[62px] top-[26px] left-1/2 z-0 -translate-x-1/2"
            src="/home-bg.png"
            alt="bg"
          />
          <p className="absolute z-10 top-[45px] font-semibold text-lg left-1/2 -translate-x-1/2 flex items-center">
            <img className="mr-2" src="/icons/play.svg" alt="play" /> Your Score
          </p>
        </div>

        <div className="mt-20">
          <button className="relative z-10 flex gap-2 items-center font-semibold text-sm bg-primary-50 px-2 py-1.5 rounded-xl mx-auto">
            <img width={20} src="/icons/wallet.svg" alt="wallet" /> Connect
            wallet
          </button>

          <div className="flex items-center flex-col mt-8 gap-2">
            <img width={65} src="/logo.png" alt="logo" />
            <h1 className="text-4xl font-bold mt-2">
              <AnimatedNumber duration={1.5} target={score} />
            </h1>
            <h2 className="text-gray-50 text-xl">$BHM</h2>
          </div>

          <div className="mt-4 max-w-[340px] mx-auto">
            <Swiper
              slidesPerView={1}
              spaceBetween={-25}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper pb-12"
            >
              {[1, 2, 3].map((e) => (
                <SwiperSlide key={e}>
                  <div
                    className={`${
                      e == 3 && "slide"
                    } max-w-[300px] bg-dark-50 rounded-3xl px-6 py-4 border border-dark`}
                  >
                    <h3 className="text-xl font-semibold">
                      Share your OG Status
                    </h3>
                    <p className="mt-1">In Telegram Stories</p>

                    <button className="mt-5 rounded-xl py-2 px-4 bg-white text-black active:opacity-60">
                      Share
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-2">
            <h4 className="font-semibold text-xl">Tasks</h4>

            <ul className="mt-4 flex flex-col gap-5">
              {tasksData.map((task, id) => (
                <li
                  className="flex items-center justify-between gap-2"
                  key={id}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-dark-gray w-[36px] h-[36px] rounded-full grid place-content-center">
                      <img src={task.icon} alt="icon" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold">{task.title}</h5>
                      <p
                        className={`text-sm text-gray-50 ${
                          task.isBold && "font-bold"
                        }`}
                      >
                        {task.price}
                      </p>
                    </div>
                  </div>

                  {task.completed ? (
                    <button
                      onClick={() => onClaim(task.score)}
                      className="rounded-3xl py-2 px-4 bg-white text-black active:opacity-60"
                    >
                      Claim
                    </button>
                  ) : (
                    <button
                      onClick={() => onComplete(task.id)}
                      className="rounded-3xl py-2 px-4 bg-dark-gray active:opacity-60"
                    >
                      Start
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="font-semibold text-xl">Your rewards</h4>

            <ul className="mt-4 flex flex-col gap-5">
              {rewardsData.map((reward, id) => (
                <li
                  className="flex items-center justify-between gap-2"
                  key={id}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-dark-gray w-[36px] h-[36px] rounded-full grid place-content-center">
                      <img src={reward.icon} alt="icon" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold">{reward.title}</h5>
                    </div>
                  </div>

                  <span className="font-bold whitespace-nowrap">
                    {reward.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
