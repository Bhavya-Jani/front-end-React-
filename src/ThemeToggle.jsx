import { useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle({ dark, setDark }) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="theme-toggle-button"
      aria-label="Toggle theme"
    >
      {dark ? <SunIcon className="icon sun-icon" /> : <MoonIcon className="icon moon-icon" />}
    </button>
  );
} 