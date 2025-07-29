// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button"; // ✅ Import Button

const Landing = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Landing Page</h1>

      {/* Cards Section */}
      <div className="flex gap-4 flex-wrap">
        <Card
          title="Villa Arrecife Beach House"
          location="Sideman, Bali, Indonesia"
          price="$2,450"
          rating={4.76}
          imageUrl="/assets/house.png"
          tags={["Top Villa", "Self CheckIn", "Free Reschedule"]}
        />

        <Card
          title="Oceanview Penthouse"
          location="Santa Monica, California"
          price="$1,980"
          rating={4.89}
          imageUrl="/assets/house.png"
          tags={["Luxury Stay", "Fast Wi-Fi", "Free Cancellation"]}
        />
      </div>

      {/* ✅ Buttons Section */}
      <div className="space-y-4 mt-6">
        <Button title="Small Button" styles="text-sm rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
        <Button title="Extra Button" styles="text-base rounded-lg" />{" "}
        {/* ✅ Added */}
      </div>
    </div>
  );
};

export default Landing;
