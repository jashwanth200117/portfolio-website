import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-800 text-white shadow-md sticky top-0">

      <Link to="/" className="hover:text-blue-400">
        <h1 className="text-xl font-bold">Jashwanth's portfolio</h1>
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/projects" className="hover:text-blue-400">
          Projects
        </Link>

        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        <button
          onClick={toggleTheme}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          {isDarkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;