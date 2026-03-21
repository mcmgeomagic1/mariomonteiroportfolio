import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/NavBar";
import { Footer } from "../Components/Footer";
import { MouseTracker } from "../Components/MouseTracker";
import ScrollToTop from "../Components/ScrollTop";
import ScrollToHash from "../Components/ScrollToHash";
import { ScrollToTopButton } from "../Components/ScrollToTopButton";

export const MainLayout = () => {
  return (
    <>
      <MouseTracker />
      <ScrollToTop />
      <ScrollToHash />
      <ScrollToTopButton />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
