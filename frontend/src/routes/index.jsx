import { Routes, Route } from "react-router";
import DefaulLayout from "../layouts/DefaulLayout";
import Students from "../pages/Students";
import Plans from "../pages/Plans.jsx";
import Payments from "../pages/Payments.jsx";
import Classes from "../pages/Classes.jsx";
import NotFound from "./NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/studants" element={<Students />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/classes" element={<Classes />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
