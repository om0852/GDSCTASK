import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-1 justify-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="w-full h-[2px] bg-blue-300"></div>
        <div className="w-[70%] h-[2px] bg-red-600"></div>
        <div className="w-[50%] h-[2px] bg-green-600"></div>
      </div>
    </>
  );
};

export default Title;
