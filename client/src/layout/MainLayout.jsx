import Navbar from "../features/shared/components/Navbar";

import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
