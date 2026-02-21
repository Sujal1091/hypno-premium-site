    import { motion } from "framer-motion";
    import ScrollReveal from "../components/ScrollReveal";

    export default function About() {
    return (
        <div className="bg-[#07090d] text-white overflow-hidden pt-32">

        {/* ================= HERO ================= */}
        <section className="py-28 px-6">
            <div className="max-w-5xl mx-auto">

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

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Hi, I'm <strong className="text-white">Sheshi Kiran Cheruku</strong> —
                a certified professional hypnotherapist and executive performance coach
                specialising in stress recovery and burnout prevention for senior leaders in India's IT sector.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
                My clients are accomplished people. VPs. Directors. CTOs.
                They've earned their success through relentless effort —
                but that same relentlessness has quietly eroded their energy,
                their relationships, and their joy of leading.
            </p>

            <p className="text-gray-400 leading-relaxed">
                I built the <span className="text-[#e6d3a3] font-semibold">THRIVE Program</span>
                because I saw a gap: high-performing professionals needed something faster,
                deeper, and more targeted than conventional coaching could offer.
                Hypnotherapy was that missing piece.
            </p>

            </div>
        </section>


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
                    className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#c6a86b] hover:shadow-[0_0_25px_rgba(198,168,107,0.4)] transition duration-300"
                    >
                    {item}
                    </div>
                ))}
                </div>

            </div>
            </section>
        </ScrollReveal>


        {/* ================= CREDENTIALS ================= */}
        <section className="py-28 px-6">
            <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl mb-12 text-center">
                Credentials & Training
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {[
                ["Certification", "Certified Professional Hypnotherapist — [Institution Name]"],
                ["Training", "NLP, CBT, Advanced Hypnosis Techniques"],
                ["Experience", "[X] years working with IT professionals"],
                ["Clients Served", "100+ Senior Managers & CXOs"],
                ["Location", "Hyderabad & Bangalore"],
                ["Industry Focus", "IT Sector — Senior Manager to CXO Level"]
                ].map((item, i) => (
                <div
                    key={i}
                    className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center hover:border-[#c6a86b] transition"
                >
                    <h3 className="text-[#c6a86b] mb-4 text-lg font-semibold">
                    {item[0]}
                    </h3>
                    <p className="text-gray-400 text-sm">
                    {item[1]}
                    </p>
                </div>
                ))}

            </div>

            </div>
        </section>


        {/* ================= PERSONAL STORY =================
        <section className="py-28 px-6 bg-black">
            <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl mb-10 text-[#e6d3a3]">
                My Story
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
                [This is where you add your authentic turning point story —
                a burnout moment, leadership crisis, or realization that led
                you into hypnotherapy.]
            </p>

            <p className="text-gray-400 leading-relaxed">
                When leaders transform internally, organisations transform externally.
                That belief drives everything I do.
            </p>

            </div>
        </section> */}


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
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(198,168,107,0.8)] active:scale-95"
            >
            BOOK A FREE CLARITY CALL
            </a>
        </section>

        </div>
    );
    }