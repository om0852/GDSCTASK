import React from "react";
import Header from "./Header";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="w-full h-[90vh] grid place-items-center">
        <div className="logof flex flex-col items-center justify-center">
          <Image src="/gdsclogo.png" alt="logo" width={100} height={100} />
          <h1 className="text-4xl font-bold">Google Developer Student Clubs</h1>
          <h1 className="text-2xl font-semibold">Dy patil akurdi ,pune</h1>
          <p className="text-center text-sm text-gray-500 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Quisquam, quos.
          </p>
        </div>
      </div>
    </>
  );
};

export default Homepage;
