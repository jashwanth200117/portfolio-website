import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;