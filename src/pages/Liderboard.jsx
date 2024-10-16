import React from "react";
import Appbar from "../components/Appbar";
import Bg from "../components/Bg";

const users = [
  {
    name: "Alexandr_scherbina",
    score: "67,254 $BHM",
    icon: "/icons/1.svg",
  },
  {
    name: "ayushhh46",
    score: "67,21,020 $BHM ",
    icon: "/icons/2.svg",
  },
  {
    name: "dev_hamster",
    score: "18,755 $BHM",
    icon: "/icons/3.svg",
  },
  {
    name: "drushveb3",
    score: "67,16,600 $BHM",
  },
  {
    name: "Ninetydev",
    score: "67,254 $BHM",
  },
  {
    name: "instant_issue",
    score: "67,254 $BHM",
  },
  {
    name: "Thebestdesignerx1421",
    score: "67,254 $BHM",
  },
];

const Liderboard = () => {
  return (
    <>
      <Appbar />

      <div className="min-h-[90dvh] mb-20 relative z-10 animated-page">
        <h1 className="text-center font-semibold text-3xl">
          Telegram Wall of Fame
        </h1>

        <ul>
          <li className="bg-dark-50 rounded-2xl p-4 flex items-center justify-between gap-4 mt-8">
            <div className="flex items-center gap-4">
              <img
                className="rounded-full"
                src="/user.png"
                width={36}
                alt="user image"
              />

              <div>
                <h4 className="text-lg font-bold">Alexandr_scherbina</h4>
                <p className="text-gray-30 text-sm font-bold">67,254 $BHM</p>
              </div>
            </div>

            <img src="/icons/1.svg" alt="medal" />
          </li>

          <h2 className="text-xl font-semibold mb-4 mt-8">40 holders</h2>

          {users.map((user, id) => (
            <li
              key={id}
              className="bg-dark-50 rounded-2xl p-4 flex items-center justify-between gap-4 mt-6"
            >
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full"
                  src="/user.png"
                  width={36}
                  alt="user image"
                />

                <div>
                  <h4 className="text-lg font-bold">{user.name}</h4>
                  <p className="text-gray-30 text-sm font-bold">{user.score}</p>
                </div>
              </div>

              {user.icon ? (
                <img src={user.icon} alt="medal" />
              ) : (
                <span className="font-medium">#{id + 1}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Bg />
    </>
  );
};

export default Liderboard;
