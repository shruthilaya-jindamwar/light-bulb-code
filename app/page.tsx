"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">

      <h1 className="text-3xl font-bold mb-8">Light Bulb 💡</h1>

      {/* Bulb Image */}
      <img
        src="https://media.istockphoto.com/id/494251010/photo/light-bulb.jpg?s=612x612&w=0&k=20&c=XxHOsnlt-Qfe4XnMxILdQNDZYF43tJw1JgrbTupvma4="
        alt="Light Bulb"
        width={200}
        height={200}
        className={`rounded-full transition-all duration-300 ${
          isOn ? "shadow-[0_0_80px_25px_rgba(255,255,0,0.8)]" : ""
        }`}
      />

      {/* Button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg"
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

    </div>
  );
}