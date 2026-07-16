import React from "react";
import { useTheme } from "@/hooks/useTheme";

const Footer = () => {

  const { theme } = useTheme()

  return (
    <footer className={`${theme === "light" ? "bg-white text-gray-600" : "bg-gray-600 text-white"} border-t mt-auto`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <p className="text-sm">
          © {new Date().getFullYear()} Employee Portal. All rights reserved.
        </p>

        <p className=" text-sm">
          Built with React + Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;