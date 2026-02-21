    import { motion } from "framer-motion";
    export default function Pricing() {
    return (
        <div className="pt-32">

        {/* SECTION 1 — HERO */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
            <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mb-6">
            A One-Time Investment in the Leader You're Meant to Be.
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl">
            No subscriptions. No endless sessions. One focused 60-day program 
            designed to deliver life-changing results — and a guarantee that 
            says we don't stop until you get there.
            </p>
            </motion.div>
        </section>



        {/* SECTION 2 — PRICING CARD */}
        <section className="py-24 px-6 bg-black">
            <div className="max-w-4xl mx-auto">
            
            <div className="border border-white/10 rounded-2xl p-10 bg-white/5 backdrop-blur-lg shadow-[0_0_40px_rgba(198,168,107,0.08)]">
                
                <h2 className="text-2xl md:text-3xl text-[#c6a86b] mb-8 text-center">
                THRIVE — 60-Day Executive Transformation
                </h2>

                <div className="grid md:grid-cols-2 gap-12 text-center">

                {/* PAY IN FULL */}
                <div>
                    <p className="text-gray-400 uppercase text-sm mb-2">
                    Pay in Full
                    </p>
                    <p className="text-4xl font-light mb-2">
                    ₹1,50,000
                    </p>
                    <p className="text-gray-500 text-sm">
                    One-time payment
                    </p>
                </div>

                {/* EMI OPTION */}
                <div>
                    <p className="text-gray-400 uppercase text-sm mb-2">
                    EMI Option
                    </p>
                    <p className="text-2xl font-light">
                    ₹1,00,000
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                    First instalment at enrolment
                    </p>

                    <p className="text-2xl font-light">
                    ₹50,000
                    </p>
                    <p className="text-gray-500 text-sm">
                    Second instalment at Day 30
                    </p>
                </div>

                </div>

            </div>
            </div>
        </section>



        {/* SECTION 3 — WHAT'S INCLUDED */}
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">
                What's Included
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
                <li>✔ 3 Offline Group Sessions + 6 Online Group Sessions</li>
                <li>✔ 2 Individual Offline Sessions + 3 Individual Online Sessions</li>
                <li>✔ 1 Personalised Pathway Creation Call</li>
                <li>✔ Hypnosis PDF Resource Library</li>
                <li>✔ Dedicated Account Manager</li>
                <li>✔ Private WhatsApp Accountability Group</li>
                <li className="text-[#c6a86b]">
                ✔ 30-Day Extension Guarantee — Free, if needed
                </li>
            </ul>
            </div>
        </section>



        {/* SECTION 4 — GUARANTEE */}
        <section className="py-28 px-6 bg-black text-center">
            <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-[#c6a86b] font-light mb-8">
                Our Promise to You
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
                If you complete the full 60-day THRIVE program and don't experience 
                meaningful improvement in your focus, energy, and work-life balance 
                — we will continue working with you for an additional 30 days at 
                absolutely no extra cost. Zero questions asked.
            </p>

            <p className="text-gray-400 leading-relaxed">
                We stand behind our results because we've seen them happen — 
                again and again — for leaders just like you.
            </p>
            </div>
        </section>



        {/* SECTION 5 — FAQ */}
        <section className="py-28 px-6">
            <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">
                Frequently Asked Questions
            </h2>

            <div className="space-y-10 text-gray-300">

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    Is hypnotherapy safe?
                </h3>
                <p>
                    Absolutely. Hypnotherapy is a completely safe, evidence-based practice. 
                    You remain fully conscious and in control throughout every session.
                </p>
                </div>

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    I've tried coaching before. How is this different?
                </h3>
                <p>
                    Traditional coaching works at the conscious level. Hypnotherapy 
                    works directly with the subconscious — where stress responses 
                    and beliefs are stored — creating faster and deeper change.
                </p>
                </div>

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    How many hours per week does this require?
                </h3>
                <p>
                    Sessions range from 60–90 minutes. Daily self-hypnosis practice 
                    takes just 10–15 minutes — designed to fit a demanding schedule.
                </p>
                </div>

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    Are sessions in person or online?
                </h3>
                <p>
                    Both. The program includes offline group sessions (Hyderabad & Bangalore), 
                    online group sessions, and individual sessions — in-person and virtual.
                </p>
                </div>

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    What if I don't see results in 60 days?
                </h3>
                <p>
                    We offer a 30-day extension at no cost. We are fully invested 
                    in your transformation.
                </p>
                </div>

                <div>
                <h3 className="text-xl text-[#c6a86b] mb-2">
                    Who is this program NOT for?
                </h3>
                <p>
                    This is not a quick fix. It requires genuine commitment 
                    and daily practice between sessions.
                </p>
                </div>

            </div>
            </div>
        </section>



        {/* SECTION 6 — CTA */}
        <section className="py-32 px-6 bg-black text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-3xl mx-auto">
            You've Invested in Your Career. Now Invest in the Person Running It.
            </h2>

            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            The leaders who thrive long-term aren't the ones who push through burnout.
            They're the ones who recognised it early — and chose to act.
            </p>

            <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
            BOOK A FREE CLARITY CALL TO ENROL →
            </a>

            <p className="text-gray-500 text-sm mt-4">
            Limited to 5 clients per cohort.
            </p>
        </section>

        </div>
    );
    }