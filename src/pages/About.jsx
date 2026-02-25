import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import blueSuit from "../assets/Blue-Suit.jpeg";
import greensuitwithchair from "../assets/greensuitwithchair.jpeg";
import greensuit from "../assets/greensuit.jpeg";
import certificate1 from "../assets/certificate1.jpeg";
import certificate2 from "../assets/certificate2.jpeg";
import certificate3 from "../assets/certificate3.jpeg";
import certificate4 from "../assets/certificate4.jpeg";
import certificate5 from "../assets/certificate(goldplate).jpeg";
import certificate6 from "../assets/certificate6.jpeg";

const certificates = [certificate1, certificate2, certificate3, certificate4, certificate5, certificate6];
export default function About() {
    return (
        <div className="bg-[#07090d] text-white overflow-hidden pt-32">

            {/* ================= HERO ================= */}
            <section className="py-28 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-6xl font-bold leading-tight mb-8"
                        >
                            I Know What It Feels Like to Be at the Top — <br />
                            <span className="text-[#c6a86b] drop-shadow-[0_0_12px_rgba(198,168,107,0.6)]">
                                and Running on Empty.
                            </span>
                        </motion.h1>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hi, I'm <strong className="text-white">Sheshi Kiran Cheruku</strong> —
                            certified professional hypnotherapist and executive performance coach.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src={blueSuit}
                        alt="Sheshi Kiran"
                        className="rounded-3xl shadow-[0_0_40px_rgba(198,168,107,0.4)] border border-white/10"
                    />

                </div>
            </section>


            <ScrollReveal>
                <section className="py-28 px-6 bg-black">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <img
                            src={greensuit}
                            alt="Professional Coach"
                            className="rounded-2xl border border-white/10 hover:scale-105 transition duration-500"
                        />

                        <div>
                            <h2 className="text-4xl mb-6 text-[#e6d3a3]">
                                Meet Sheshi Kiran
                            </h2>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Over the years, I have worked closely with senior IT leaders navigating
                                high-pressure environments...
                            </p>

                            <blockquote className="italic text-gray-400 border-l-4 border-[#c6a86b] pl-4">
                                “True transformation begins when the subconscious aligns with purpose.”
                            </blockquote>
                        </div>

                    </div>
                </section>
            </ScrollReveal>

            {/* ================= APPROACH ================= */}
            <ScrollReveal>
                <section className="py-28 px-6 bg-black">
                    <div className="max-w-5xl mx-auto">

                        <h2 className="text-4xl mb-10 text-[#e6d3a3] drop-shadow-[0_0_10px_rgba(198,168,107,0.7)]">
                            Why Hypnotherapy — And Why Now?
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            The stress you carry as a senior leader isn't just mental — it's subconscious.
                            Years of pressure, perfectionism, and hyper-responsibility have been wired into your nervous system.
                            Conscious strategies alone can't fully reach it.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mt-12">
                            {[
                                "Releases chronic stress patterns stored in the body and mind",
                                "Reprograms limiting beliefs around performance, worth, and boundaries",
                                "Builds mental resilience that lasts — not just coping mechanisms",
                                "Restores the clarity and energy that made you exceptional"
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-[#c6a86b] hover:shadow-[0_0_30px_rgba(198,168,107,0.4)] transition duration-300"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </ScrollReveal>


            {/* ================= CREDENTIALS ================= */}
            <ScrollReveal>
                <section className="py-28 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                        <div>
                            <h2 className="text-4xl mb-10">
                                Credentials & Training
                            </h2>

                            <ul className="space-y-4 text-gray-300">
                                <li>✔ Certified Professional Hypnotherapist</li>
                                <li>✔ NLP, CBT & Advanced Hypnosis</li>
                                <li>✔ 100+ Senior Leaders Coached</li>
                                <li>✔ Workshops Across Hyderabad & Bangalore</li>
                            </ul>
                        </div>

                        <img
                            src={greensuitwithchair}
                            alt="Office"
                            className="rounded-3xl border border-white/10 shadow-xl"
                        />

                    </div>
                </section>
            </ScrollReveal>

            {/* ================= WORKSHOPS & TRANSFORMATIONS ================= */}
            <ScrollReveal>
                <section className="py-28 px-6 bg-black">
                    <div className="max-w-6xl mx-auto">

                        <h2 className="text-4xl mb-12 text-center text-[#e6d3a3]">
                            Workshops & Transformations
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {certificates.map((img, i) => (
                                <div
                                    key={i}
                                    className="relative group overflow-hidden rounded-2xl border border-white/10"
                                >
                                    <img
                                        src={img}
                                        alt="Workshop"
                                        className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </ScrollReveal>

            {/* ================= CTA ================= */}
            <section className="py-28 px-6 text-center">
                <h2 className="text-4xl mb-6">
                    Let's Start Your Transformation
                </h2>

                <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                    If you're a senior IT leader ready to stop surviving your career
                    and start thriving in it, book a free Clarity Call.
                </p>

                <a
                    href="https://wa.me/918519833399"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:shadow-[0_0_35px_rgba(198,168,107,1)] relative inline-flex items-center gap-2 bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(198,168,107,0.8)] active:scale-95"
                >
                    BOOK A FREE CLARITY CALL
                </a>
            </section>

        </div>
    );
}