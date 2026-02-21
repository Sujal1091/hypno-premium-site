    import { useState } from "react";
    import { Link } from "react-router-dom";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faPhone } from "@fortawesome/free-solid-svg-icons";
    import logo from "../assets/logo_2-removebg.png";

    export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
            <img
                src={logo}
                alt="Sheshi Kiran Logo"
                className="h-16 transition duration-300 group-hover:drop-shadow-[0_0_12px_rgba(198,168,107,0.9)]"
            />
            <span className="text-2xl font-bold text-white tracking-wide">
                Sheshi Kiran Cheruku
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link to="/" className="hover:text-[#e6d3a3] transition">Home</Link>
            <Link to="/about" className="hover:text-[#e6d3a3] transition">About</Link>
            <Link to="/program" className="hover:text-[#e6d3a3] transition">Services</Link>
            <Link to="/pricing" className="hover:text-[#e6d3a3] transition">Pricing</Link>
            <Link to="/contact" className="hover:text-[#e6d3a3] transition">Contact</Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
            
            {/* Desktop Book Call */}
            <a
                href="https://wa.me/918519833399"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-4 py-2 rounded-full font-semibold text-sm transition duration-300 hover:scale-105 active:scale-95 items-center gap-2"
            >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                Book Call
            </a>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-white text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>
            </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-4 text-gray-300">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">About</Link>
            <Link to="/program" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Services</Link>
            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Pricing</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Contact</Link>

            <a
                href="https://wa.me/918519833399"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-4 py-2 rounded-full font-semibold text-sm mt-4"
            >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2" />
                Book Call
            </a>
            </div>
        )}
        </nav>
    );
    }