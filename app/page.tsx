"use client";

import { useState } from "react";

export default function Home() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      
      <h1 className="text-3xl font-bold mb-8">
        Light Bulb Switch 💡
      </h1>

      {/* Bulb Image */}
<img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZkpMAxDYEDPpSnDfrPLtMpGBJjISWF7te6RkkLorIQ&s"
  alt="Light Bulb"
  width={200}
  height={200}
  className="rounded-full transition-all duration-300"
/>

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