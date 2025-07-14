import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="px-4 py-2 border rounded">
      Switch to {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
};

export default ThemeButton;
