import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
    return (
        <div className="bg-[#07090d] text-white overflow-hidden">
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
        </div>
    );
}