import { Outlet } from "react-router";
import Nav from "../components/navBar/Nav";
import "./app.css";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <div className=" dark:bg-[#0B0B0B] min-h-screen dark:text-[#EBECF3]  relative">
      <Nav />

      <div className="max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
