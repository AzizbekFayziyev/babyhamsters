import React, { useState } from "react";
import Bg from "../components/Bg";
import Button from "../components/Button";
import Appbar from "../components/Appbar";

const friendsData = [
  {
    title: "Alexandr_scherbina",
    price: "+1,403 $BHM",
  },
  {
    title: "ayushhh46",
    price: "+1,769 $BHM",
  },
  {
    title: "ayushhh46",
    price: "+1,769 $BHM",
  },
  {
    title: "drushveb3",
    price: "+2,104 $BHM",
  },
  {
    title: "Alexandr_scherbina",
    price: "+1,403 $BHM",
  },
  {
    title: "ayushhh46",
    price: "+1,769 $BHM",
  },
  {
    title: "ayushhh46",
    price: "+1,769 $BHM",
  },
  {
    title: "drushveb3",
    price: "+2,104 $BHM",
  },
  {
    title: "Alexandr_scherbina",
    price: "+1,403 $BHM",
  },
  {
    title: "ayushhh46",
    price: "+1,769 $BHM",
  },
];

const Friends = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <Appbar />

      {status ? (
        <div className="min-h-[90dvh] mb-20 animated-page">
          <h2 className="text-xl font-semibold mb-6">16 friends</h2>

          <ul className="flex flex-col gap-7 max-h-[500px] overflow-y-auto">
            {friendsData.map((friend, id) => (
              <li className="flex items-center justify-between gap-2" key={id}>
                <div className="flex items-center gap-2">
                  <img
                    width={36}
                    className="rounded-full"
                    src="/user2.png"
                    alt="avatar"
                  />

                  <h4 className="text-base font-bold">{friend.title}</h4>
                </div>

                <p className="font-bold">{friend.price}</p>
              </li>
            ))}
          </ul>

          <div className="w-full mt-8">
            <Button isDark>Invite Friends</Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center min-h-[80dvh] animated-page">
          <h1 className="text-3xl font-semibold text-center">
            Invite friends and get more $BHM
          </h1>

          <img className="mt-24" width={186} src="/logo.png" alt="logo" />

          <div className="w-full mt-auto">
            <Button onClick={() => setStatus(true)} isDark>
              Invite Friends
            </Button>
          </div>
        </div>
      )}

      <Bg rotated />
    </>
  );
};

export default Friends;
