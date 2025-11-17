import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import { Outlet } from "react-router";

const DefaulLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden ">
      <Aside />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 pl-48 pt-3 transition-all duration-300 bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaulLayout;
