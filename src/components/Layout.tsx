import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";

const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={
        isDarkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;