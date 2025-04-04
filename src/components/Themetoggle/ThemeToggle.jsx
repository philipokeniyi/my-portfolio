import { useEffect, useState } from "react";
import "../../index.css";

export default function ThemeToggle() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = storedTheme ? storedTheme === "dark" : true; // Default to dark

  const [darkMode, setDarkMode] = useState(prefersDark);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="theme-button">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
