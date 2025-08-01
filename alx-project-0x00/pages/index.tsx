import React from "react";
import Image from "next/image"; // ✅ Step 1: Import next/image

const Home: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold space-y-4">
      <h1>Airbnb Application Clone system</h1>

      <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
        Get Started
      </button>

      {/* ✅ Step 2: Add images here */}
      <Image src="/assets/house.png" alt="House" width={200} height={200} />
      <Image src="/assets/star.png" alt="Star" width={100} height={100} />
    </main>
  );
};

export default Home;
