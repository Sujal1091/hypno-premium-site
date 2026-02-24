    import { motion } from "framer-motion";
    import { useState } from "react";
    import ScrollReveal from "../components/ScrollReveal";
    import blueSuit from "../assets/Blue-Suit.jpeg";
    import cert1 from "../assets/certificate1.jpeg";
    import cert2 from "../assets/certificate(goldplate).jpeg";


    export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className="bg-[#07090d] text-white overflow-hidden">


        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
            >
            <p className="text-[#c6a86b] tracking-widest mb-4 text-sm uppercase">
                For Senior Managers & CXOs in IT | Hyderabad & Bangalore
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                You Built a Career That <br />
                Demands Everything.
            </h1>

            <h2 className="text-3xl md:text-4xl text-[#c6a86b] mb-6 font-light">
                It's Time to Reclaim the Energy to Lead It.
            </h2>

            <p className="text-gray-300 text-lg mb-8 max-w-xl">
                In just 60 days, rewire your mind for clarity, focus, and peak
                performance — without talk therapy, burnout spirals, or sacrificing
                what matters most.
            </p>

            <div className="flex gap-4 flex-wrap">
                <a
                href="https://wa.me/918519833399"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] 
                text-black px-6 py-4 rounded-full font-semibold text-lg 
                transition duration-300 hover:scale-105 
                hover:shadow-[0_0_25px_rgba(198,168,107,0.8)]"
                >
                Book Free Clarity Call
                </a>

                <button className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition">
                Explore Program
                </button>
            </div>

            <p className="text-gray-400 mt-6 text-sm">
                Already helped 100+ senior leaders reclaim 2–3 hours of focused
                productivity daily.
            </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
            >
            {/* Gold Glow Background */}
            <div className="absolute w-[420px] h-[420px] bg-[#c6a86b]/20 blur-[140px] rounded-full"></div>

            <img
                src={blueSuit}
                alt="Sheshi Kiran"
                className="relative rounded-3xl border border-white/10 
                shadow-[0_0_60px_rgba(198,168,107,0.35)] 
                hover:scale-105 transition duration-700"
            />
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
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-4xl mb-16">What Leaders Are Saying</h2>

                    <div className="grid md:grid-cols-2 gap-12">

                    {/* CARD 1 */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 
                    hover:border-[#c6a86b] hover:shadow-[0_0_40px_rgba(198,168,107,0.3)] 
                    transition duration-500">

                        {/* IMAGE */}
                        <div className="overflow-hidden">
                        <img
                            src={cert1}
                            alt="VP Engineering"
                            className="w-full h-64 object-cover transition duration-700 hover:scale-110"
                        />
                        </div>

                        {/* CONTENT */}
                        <div className="p-8 text-left">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            "I went from running on empty to leading with clarity and energy."
                        </p>

                        <p className="text-[#c6a86b] font-semibold">
                            — VP Engineering
                        </p>
                        <p className="text-sm text-gray-400">
                            Hyderabad
                        </p>
                        </div>

                    </div>


                    {/* CARD 2 */}
                    <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 
                    hover:border-[#c6a86b] hover:shadow-[0_0_40px_rgba(198,168,107,0.3)] 
                    transition duration-500">

                        <div className="overflow-hidden">
                        <img
                            src={cert2}
                            alt="CTO"
                            className="w-full h-64 object-cover transition duration-700 hover:scale-110"
                        />
                        </div>

                        <div className="p-8 text-left">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            "In 60 days I reclaimed my focus and confidence."
                        </p>

                        <p className="text-[#c6a86b] font-semibold">
                            — CTO
                        </p>
                        <p className="text-sm text-gray-400">
                            Bangalore
                        </p>
                        </div>

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

        </div>
    );
    }
