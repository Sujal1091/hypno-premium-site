    import { motion } from "framer-motion";
    import { Link } from "react-router-dom";
    import { useState } from "react";
    import ScrollReveal from "../components/ScrollReveal";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faPhone } from "@fortawesome/free-solid-svg-icons";
    import logo from '../assets/logo_2-removebg.png';


    export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className="bg-[#07090d] text-white overflow-hidden">

        {/* ================= NAVBAR ================= */}
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

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-4 text-gray-300">
                <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">About</Link>
                <Link to="/program" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Services</Link>
                <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Pricing</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-[#e6d3a3]">Contact</Link>

                {/* Mobile Book Call */}
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

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-32">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className="text-[#c6a86b] tracking-widest mb-4 text-sm">
                For Senior Managers & CXOs in IT | Hyderabad & Bangalore
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                You Built a Career That <br />
                Demands Everything.
                </h1>

                <h2 className="text-3xl md:text-4xl text-[#c6a86b] mb-6 font-light">
                It's Time to Reclaim the Energy to Lead It.
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                In just 60 days, rewire your mind for clarity, focus, and peak performance without talk therapy, burnout spirals, or sacrificing what matters most.
                </p>

                <div className="flex gap-4 flex-wrap">
                <a
                    href="https://wa.me/918519833399"
                    target="_blank"
                    className="relative bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-6 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(198,168,107,0.8)] active:scale-95 flex items-center gap-2"
                >
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                    Book Free Clarity Call
                </a>

                <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition">
                    Explore Program
                </button>
                </div>

                <p className="text-gray-400 mt-6 text-sm">
                Already helped 100+ senior leaders in India's top IT companies reclaim 2–3 hours of focused productivity daily.
                </p>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                <div className="absolute w-[400px] h-[400px] bg-[#c6a86b]/20 blur-[120px] rounded-full top-10 left-20"></div>

                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-3xl">
                <h3 className="text-2xl mb-4">60-Day Transformation</h3>
                <p className="text-gray-300">
                    Eliminate burnout, regain clarity and perform like a
                    high-energy leader again.
                </p>
                </div>
            </motion.div>

            </div>
        </section>
<ScrollReveal>
        {/* ================= PROBLEM SECTION ================= */}
        <section className="py-28 px-6 bg-black">
            <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl mb-10  text-[#e6d3a3] drop-shadow-[0_0_10px_rgba(198,168,107,0.9)]">Sound Familiar?</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
                You've climbed the corporate ladder. You've built teams, delivered results, and earned your seat at the table. But somewhere along the way, the cost of success quietly became too high.
            </p>

            <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                        },
                    }}
                    className="grid md:grid-cols-2 gap-6 mt-12 text-left"
                >
                {[
                "Waking up exhausted even after 7+ hours sleep",
                "Mind constantly running through meetings & deadlines",
                "Decision fatigue & mental overload",
                "Disconnection from family & purpose",
                "Avoiding difficult conversations",
                "Feeling slowly burned out despite success",
                ].map((item, i) => (
                    <motion.div
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#c6a86b] hover:shadow-[0_0_25px_rgba(198,168,107,0.4)] transition duration-300"
                    >
                    {item}
                    </motion.div>
                ))}
            </motion.div>
            </div>
        </section>
</ScrollReveal>


        {/* ================= SOLUTION ================= */}
        <section className="py-28 px-6">
            <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl mb-6">
                A Smarter, Faster Path to Recovery
            </h2>

            <p className="text-gray-300 text-lg mb-8">
                The THRIVE Program is a 60-day hypnotherapy-based transformation
                system designed for senior IT leaders to reprogram stress
                patterns at the subconscious level.
            </p>

            <a
                href="https://wa.me/918519833399"
                target="_blank"
                className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-6 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(198,168,107,0.8)] active:scale-95"
            >
                Explore THRIVE Program
            </a>
            </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-28 px-6 bg-black">
            <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl mb-12">What Leaders Are Saying</h2>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                "I went from running on empty to leading with clarity and energy."
                <p className="mt-4 text-sm text-gray-400">
                    — VP Engineering, Hyderabad
                </p>
                </div>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                "In 60 days I reclaimed my focus and confidence."
                <p className="mt-4 text-sm text-gray-400">
                    — CTO, Bangalore
                </p>
                </div>
            </div>

            </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-28 px-6 text-center">
            <h2 className="text-4xl mb-6">
            Ready to Lead from Strength — Not Survival?
            </h2>

            <p className="text-gray-300 mb-8">
            Book a free 30-minute Clarity Call with Sheshi. No pressure, no pitch just a focused conversation about where you are, where you want to be, and whether the THRIVE program is the right fit for you.
            </p>

            <a
            href="https://wa.me/918519833399"
            target="_blank"
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-6 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(198,168,107,0.8)] active:scale-95"
            >
            Claim Your Free Clarity Call
            </a>
        </section>

        {/* ================= FOOTER ================= */}
    <footer className="bg-black border-t border-white/10 px-6 py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
        <h2 className="text-2xl font-semibold tracking-widest mb-4">
            SHESHI KIRAN
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
            Professional Hypnotherapist & Executive Performance Coach
            helping senior IT leaders eliminate burnout and perform at
            peak mental clarity.
        </p>
        </div>

        {/* QUICK LINKS */}
        <div>
        <h3 className="mb-4 text-lg">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">THRIVE Program</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
        </div>

            <div>
        <h3 className="mb-4 text-lg">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
        </ul>
        </div>

        {/* CONTACT */}
        <div>
        <h3 className="mb-4 text-lg">Contact</h3>
        <p className="text-gray-400 text-sm mb-2">
            📞 +91 8519833399
        </p>
        <p className="text-gray-400 text-sm mb-2">
            ✉ contact@sheshikiran.com
        </p>
        <p className="text-gray-400 text-sm">
            Hyderabad & Bangalore
        </p>
        </div>

        {/* CTA
        <div>
        <h3 className="mb-4 text-lg">Start Your Transformation</h3>
        <a
            href="https://wa.me/918519833399"
            target="_blank"
            className="inline-block bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
            Book Free Clarity Call
        </a>
        </div> */}

    </div>

    {/* BOTTOM */}
    <div className="text-center text-gray-500 text-sm mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Sheshi Kiran Cheruku. All rights reserved.
    </div>
    </footer>


        </div>
    );
    }
