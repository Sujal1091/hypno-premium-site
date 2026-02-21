    import { motion } from "framer-motion";

    export default function Program() {
    return (
        <div className="pt-32">

        {/* SECTION 1 — HERO */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
            <p className="text-[#c6a86b] uppercase tracking-widest text-sm mb-4">
            The THRIVE Program | 60-Day Executive Transformation
            </p>

            <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-5xl mb-6">
            Rewire Your Mind. Reclaim Your Edge. <br className="hidden md:block" />
            Lead with Power — In Just 60 Days.
            </h1>

            <p className="text-gray-400 max-w-3xl text-lg">
            A science-backed, hypnotherapy-powered transformation program built exclusively 
            for burned-out Senior Managers and CXOs in the IT industry.
            </p>
            </motion.div>
        </section>



        {/* SECTION 2 — OUTCOMES */}
        <section className="py-28 px-6 bg-black">
            <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
                Your 60-Day Transformation Outcomes
            </h2>

            <ul className="space-y-6 text-gray-300 text-lg">
                <li>✔ Recover 2–3 hours of focused deep-work productivity every day</li>
                <li>✔ Fall asleep easily and wake up genuinely refreshed</li>
                <li>✔ Lead meetings and decisions with clarity — not anxiety</li>
                <li>✔ Set boundaries confidently without guilt</li>
                <li>✔ Eliminate imposter syndrome and reclaim authentic leadership</li>
                <li>✔ Create a sustainable lifestyle that prevents future burnout</li>
            </ul>
            </div>
        </section>



        {/* SECTION 3 — 3 PHASE JOURNEY */}
        <section className="py-28 px-6">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
                How the Program Works: 3 Phases, 60 Days
            </h2>

            <div className="space-y-20">

                {/* PHASE 1 */}
                <div>
                <h3 className="text-2xl text-[#c6a86b] mb-4">
                    Phase 1: Foundation & Immediate Relief (Days 1–15)
                </h3>
                <p className="text-gray-400 mb-6">
                    We calm your nervous system first. You learn deep relaxation, 
                    trance techniques, and create a reliable “mental off-switch.”
                </p>

                <ul className="space-y-3 text-gray-300">
                    <li><strong>Week 1:</strong> Deep Relaxation & Stress Release</li>
                    <li><strong>Week 2:</strong> Calming the Overloaded Mind</li>
                </ul>
                </div>

                {/* PHASE 2 */}
                <div>
                <h3 className="text-2xl text-[#c6a86b] mb-4">
                    Phase 2: Subconscious Reprogramming & Resilience (Days 16–40)
                </h3>
                <p className="text-gray-400 mb-6">
                    We target subconscious patterns driving procrastination,
                    imposter syndrome, and poor boundaries.
                </p>

                <ul className="space-y-3 text-gray-300">
                    <li><strong>Week 3:</strong> Focus & Procrastination Elimination</li>
                    <li><strong>Week 4:</strong> Conquering Imposter Syndrome</li>
                    <li><strong>Week 5:</strong> Boundaries & Work-Life Balance</li>
                </ul>
                </div>

                {/* PHASE 3 */}
                <div>
                <h3 className="text-2xl text-[#c6a86b] mb-4">
                    Phase 3: Integration & Future-Proofing (Days 41–60)
                </h3>
                <p className="text-gray-400 mb-6">
                    We lock in your gains and build lifelong resilience systems.
                </p>

                <ul className="space-y-3 text-gray-300">
                    <li><strong>Week 6:</strong> Energy Restoration</li>
                    <li><strong>Week 7:</strong> Sleep Optimisation</li>
                    <li><strong>Week 8:</strong> Reinforcement & Custom Toolkit</li>
                </ul>
                </div>

            </div>
            </div>
        </section>



        {/* SECTION 4 — WHAT'S INCLUDED */}
        <section className="py-28 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
                Everything in the THRIVE Program
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-300 border border-white/10">
                <thead className="bg-white/5">
                    <tr>
                    <th className="p-4">Deliverable</th>
                    <th className="p-4">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-white/10">
                    <td className="p-4">Offline Group Hypnotherapy Sessions</td>
                    <td className="p-4">3 Sessions</td>
                    </tr>
                    <tr className="border-t border-white/10">
                    <td className="p-4">Online Group Hypnotherapy Sessions</td>
                    <td className="p-4">6 Sessions</td>
                    </tr>
                    <tr className="border-t border-white/10">
                    <td className="p-4">Individual Offline Sessions</td>
                    <td className="p-4">2 Sessions</td>
                    </tr>
                    <tr className="border-t border-white/10">
                    <td className="p-4">Individual Online Sessions</td>
                    <td className="p-4">3 Sessions</td>
                    </tr>
                    <tr className="border-t border-white/10">
                    <td className="p-4">WhatsApp Accountability Group</td>
                    <td className="p-4">Full 60 Days</td>
                    </tr>
                    <tr className="border-t border-white/10">
                    <td className="p-4">30-Day Extension Guarantee</td>
                    <td className="p-4 text-[#c6a86b]">Free if goals not met</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </section>



        {/* SECTION 5 — COMPARISON */}
        <section className="py-28 px-6">
            <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-16">
                Why THRIVE Over Traditional Therapy or Coaching?
            </h2>

            <div className="grid md:grid-cols-2 gap-10 text-left">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h3 className="text-xl text-[#c6a86b] mb-4">THRIVE Program</h3>
                <ul className="space-y-2 text-gray-300">
                    <li>✔ Shifts in days/weeks</li>
                    <li>✔ Subconscious-first approach</li>
                    <li>✔ Structured 60-day journey</li>
                    <li>✔ One-time investment</li>
                    <li>✔ Extra month guarantee</li>
                </ul>
                </div>

                <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h3 className="text-xl text-[#c6a86b] mb-4">Traditional Methods</h3>
                <ul className="space-y-2 text-gray-400">
                    <li>❌ Months to years</li>
                    <li>❌ Conscious strategies only</li>
                    <li>❌ Open-ended sessions</li>
                    <li>❌ Recurring weekly fees</li>
                    <li>❌ No guarantee</li>
                </ul>
                </div>
            </div>
            </div>
        </section>



        {/* SECTION 6 — CTA */}
        <section className="py-32 px-6 bg-black text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
            This Program Is For You If...
            </h2>

            <div className="max-w-3xl mx-auto text-gray-300 space-y-4 mb-10">
            <p>✔ You're a Senior Manager, Director, VP, or CXO in IT</p>
            <p>✔ You're earning ₹1.5L+ per month</p>
            <p>✔ You're based in Hyderabad or Bangalore</p>
            <p>✔ You're ready to invest in yourself seriously</p>
            </div>

            <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
            APPLY FOR THE THRIVE PROGRAM →
            </a>

            <p className="text-gray-500 mt-4 text-sm">
            Intake is by application only.
            </p>
        </section>

        </div>
    );
    }