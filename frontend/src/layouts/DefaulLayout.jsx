import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const DefaulLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaulLayout;
