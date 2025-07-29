// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";

const LandingPage: React.FC = () => {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Landing Page</h1>

      {/* Render Card component 3 times */}
      <Card />
      <Card />
      <Card />
    </main>
  );
};

export default LandingPage;
