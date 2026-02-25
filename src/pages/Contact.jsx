import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);
    return (
        <div className="pt-32">

            {/* SECTION 1 — HERO */}

            <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mb-6"
                >
                    Let's Talk About Your Transformation

                    <p className="text-gray-400 text-lg max-w-3xl">
                        The first step costs you nothing but 30 minutes. Book a free Clarity
                        Call with Sheshi and walk away with a clear picture of what's
                        holding you back — and whether THRIVE is the right path forward.
                    </p>
                </motion.h1>
            </section>



            {/* SECTION 2 — FORM */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-4xl mx-auto">

                    <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                Fill in the form below and Sheshi's team will reach out within 
                24 hours to schedule your call. Spots are limited and intake is 
                by application — we work only with leaders who are truly ready.
                    </p>
                <form
                    ref={formRef}
                    action="https://docs.google.com/forms/d/e/1FAIpQLSdD_Ud45J3y1BD1pipivI8EkirNDnKYvK5MrNelqYyVSANpnw/formResponse"
                    method="POST"
                    target="hidden_iframe"
                    onSubmit={() => {
                            setSubmitted(true);

                            // Clear form after short delay
                            setTimeout(() => {
                            formRef.current.reset();
                            }, 200);

                            // Hide success message after 5 sec
                            setTimeout(() => {
                            setSubmitted(false);
                            }, 5000);
                        }}
                        className="space-y-6"

                                        >

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="entry.93428303"
                            placeholder="Full Name"
                            className="input-style"
                            required
                        />

                        <input
                            type="text"
                            name="entry.284281444"
                            placeholder="Phone Number (WhatsApp preferred)"
                            className="input-style"
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-1 gap-6">
                        <input
                            type="email"
                            name="entry.993024827"
                            placeholder="Email Address"
                            className="input-style"
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="entry.780581578"
                            placeholder="Company / Industry"
                            className="input-style"
                        />

                        <input
                            type="text"
                            name="entry.1527130256"
                            placeholder="City (Hyderabad / Bangalore / Other)"
                            className="input-style"
                            required
                        />
                    </div>

                    <textarea
                        name="entry.1348171502"
                        placeholder="What's your biggest challenge right now?"
                        rows="4"
                        className="input-style"
                    />

                    <input
                        type="text"
                        name="entry.636853216"
                        placeholder="How did you hear about Sheshi?"
                        className="input-style"
                        required
                    />

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-[#c6a86b] to-[#e6d3a3] text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
                        >
                            SUBMIT YOUR APPLICATION →
                        </button>
                    </div>
                </form>
                {submitted && (
                    <p className="text-center text-[#c6a86b] mt-6">
                        Thank you. Our team will contact you within 24 hours.
                    </p>
                )}

                <iframe name="hidden_iframe" style={{ display: "none" }} />
                </div>
            </section>



            {/* SECTION 3 — CONTACT DETAILS */}
            <section className="py-28 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-light mb-16">
                        Direct Contact
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* EMAIL */}
                        <a href="mailto:your@email.com" className=" hover:border-[#c6a86b] hover:-translate-y-1 transition duration-300 block">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-[#c6a86b] transition duration-300">
                                <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-[#c6a86b] mb-4" />
                                <h3 className="text-lg mb-2">Email</h3>
                                <p className="text-gray-400">your@email.com</p>
                            </div>
                        </a>

                        {/* PHONE */}
                        <a href="https://wa.me/+918519833399" target="_blank" className="hover:border-[#c6a86b] hover:-translate-y-1 transition duration-300 block">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-[#c6a86b] transition duration-300">
                                <FontAwesomeIcon icon={faPhone} className="text-3xl text-[#c6a86b] mb-4" />
                                <h3 className="text-lg mb-2">Phone / WhatsApp</h3>
                                <p className="text-gray-400">+91 85198 33399</p>
                            </div>
                        </a>

                        {/* INSTAGRAM */}
                        <a
                            href="https://www.instagram.com/raise_of_sheshis?igsh=MXEzMTZid28zeWxhZg=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md 
                                        hover:border-[#c6a86b] hover:-translate-y-1 
                                        transition duration-300 block"
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-3xl text-[#c6a86b] mb-4" />
                            <h3 className="text-lg mb-2">Instagram</h3>
                            <p className="text-gray-400">@raise_of_sheshis</p>
                        </a>

                        {/* LINKEDIN */}
                        <a
                            href="https://youtube.com/@mindsupport.hypnosis?si=_TUdbnkY1O6rNrAT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md 
                                    hover:border-[#c6a86b] hover:-translate-y-1 
                                    transition duration-300 block"
                        >
                            <FontAwesomeIcon icon={faYoutube} className="text-3xl text-[#c6a86b] mb-4" />
                            <h3 className="text-lg mb-2">Youtube</h3>
                            <p className="text-gray-400">youtube.com/@mindsupport.hypnosis</p>
                        </a>

                    </div>

                    {/* Serving Line */}
                    <div className="mt-16 text-gray-400">
                        Serving Hyderabad & Bangalore (Online India-wide)
                    </div>

                </div>
            </section>

            {/* SECTION 4 — REASSURANCE CLOSE */}
            <section className="py-24 px-6 bg-black text-center">
                <div className="max-w-3xl mx-auto">

                    <p className="text-gray-300 leading-relaxed mb-6">
                        Not ready to apply yet? That's okay. Follow Sheshi on Instagram
                        and LinkedIn for daily insights on executive performance, stress
                        mastery, and the science of hypnotherapy — designed specifically
                        for leaders in the IT space.
                    </p>

                    <p className="text-gray-400">
                        You can also email directly at your@email.com for any questions
                        before booking a call.
                    </p>

                    <p className="text-gray-500 text-sm mt-6">
                        Response time: Within 24 business hours.
                    </p>

                </div>
            </section>

        </div>
    );
}