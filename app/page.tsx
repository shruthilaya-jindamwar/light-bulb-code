"use client";

import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      
      <h1 className="text-3xl font-bold mb-8">
        Light Bulb Switch 💡
      </h1>

      {/* Bulb */}
      <div
        className={`w-40 h-40 rounded-full mb-8 transition-all duration-300 
        ${isOn ? "bg-yellow-400 shadow-[0_0_60px_20px_rgba(255,255,0,0.7)]" : "bg-gray-400"}`}
      ></div>

      {/* Button */}
      <button
        onClick={() => setIsOn(!isOn)}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>

    </div>
  );
}