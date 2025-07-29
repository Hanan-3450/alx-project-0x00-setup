import React from "react";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Landing Page</h1>
      <div className="flex gap-6 flex-wrap justify-center">
        <Card
          title="Villa Arrecife Beach House"
          location="Sideman, Bali, Indonesia"
          price="$2,450"
          rating={4.76}
          imageUrl="/assets/house.png"
          tags={["Top Villa", "Self CheckIn", "Free Reschedule"]}
        />
        <Card
          title="Oceanview Cottage"
          location="Nusa Penida, Indonesia"
          price="$1,850"
          rating={4.91}
          imageUrl="/assets/house.png"
          tags={["Beachfront", "Free Breakfast", "Wifi"]}
        />
        <Card
          title="Mountain Cabin Retreat"
          location="Ubud, Bali, Indonesia"
          price="$2,100"
          rating={4.82}
          imageUrl="/assets/house.png"
          tags={["Nature", "Private Pool", "Luxury"]}
        />
      </div>
    </main>
  );
};

export default Landing;
