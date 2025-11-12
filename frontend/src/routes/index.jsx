import { Routes, Route } from "react-router";
import DefaulLayout from "../layouts/DefaulLayout";
import Students from "../pages/Students";
import NotFound from "./NotFound.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/studants" element={<Students />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
