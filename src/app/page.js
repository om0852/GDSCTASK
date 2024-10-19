"use client";
import Image from "next/image";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) return <Loader />;
  return (
    <div
      className={`w-full object-cover h-full`}
      style={{
        backgroundImage: `url('/gdscbackground.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <Homepage />
    </div>
  );
}
