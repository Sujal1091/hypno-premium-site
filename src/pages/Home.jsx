    import { motion } from "framer-motion";
    import { Links } from "react-router-dom";
    import ScrollReveal from "../components/ScrollReveal";


    export default function Home() {
    return (
        <div className="bg-[#07090d] text-white overflow-hidden">

        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-xl tracking-widest font-semibold">
                SHESHI KIRAN
            </h1>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
                <a href="./Home" className="hover:text-white">Home</a>
                <a href="./about" className="hover:text-white">About</a>
                <a href="./program" className="hover:text-white">Program</a>
                <a href="./pricing" className="hover:text-white">Pricing</a>
                <a href="./contact" className="hover:text-white">Contact</a>
            </div>

            <a
                href="https://wa.me/918519833399"
                target="_blank"
                className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
                Book Call
            </a>
            </div>
        </nav>

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-24">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* <p className="text-[#c6a86b] tracking-widest mb-4 text-sm">
                FOR SENIOR MANAGERS & CXOs IN IT
                </p> */}

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                You Built a Career That <br />
                Demands Everything.
                </h1>

                <h2 className="text-3xl md:text-4xl text-[#c6a86b] mb-6 font-light">
                Now Reclaim the Energy to Lead It.
                </h2>

                <p className="text-gray-300 text-lg mb-8">
                In just 60 days, rewire your subconscious for clarity,
                focus and peak performance — without burnout or endless therapy.
                </p>

                <div className="flex gap-4 flex-wrap">
                <a
                    href="https://wa.me/918519833399"
                    target="_blank"
                    className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
                >
                    Book Free Clarity Call
                </a>

                <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition">
                    Explore Program
                </button>
                </div>

                <p className="text-gray-400 mt-6 text-sm">
                Already helped 100+ senior leaders reclaim 2–3 hours of
                productivity daily.
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
            <h2 className="text-4xl mb-10">Sound Familiar?</h2>

            <p className="text-gray-300 text-lg leading-relaxed">
                You've built success. Delivered results. Earned respect.  
                But somewhere along the way, the cost became too high.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
                {[
                "Waking up exhausted even after 7+ hours sleep",
                "Mind constantly running through meetings & deadlines",
                "Decision fatigue & mental overload",
                "Disconnection from family & purpose",
                "Avoiding difficult conversations",
                "Feeling slowly burned out despite success",
                ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                    {item}
                </div>
                ))}
            </div>
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
                className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
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
            Book a free clarity call and discover if THRIVE is right for you.
            </p>

            <a
            href="https://wa.me/918519833399"
            target="_blank"
            className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 transition"
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
