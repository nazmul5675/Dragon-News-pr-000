import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Apply theme to HTML tag when theme changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between light and dark
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            className="btn btn-active  text-sm"
            onClick={toggleTheme}
        >
            {theme === "light" ? "🌞 Light" : "🌙 Dark"}
        </button>
    );
}
