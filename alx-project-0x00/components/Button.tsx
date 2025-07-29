// components/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces"; // Make sure the path is correct

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white py-2 px-4 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
