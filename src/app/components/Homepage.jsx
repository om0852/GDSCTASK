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
          <h1 className="text-xl px-4 text-center md:text-4xl font-bold">Google Developer Student Clubs</h1>
          <h1 className=" text-[18px] md:text-2xl font-semibold">Dy patil akurdi ,pune</h1>
          <p className="text-center text-sm text-gray-500 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Join us now
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
