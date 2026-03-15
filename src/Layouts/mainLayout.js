import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
