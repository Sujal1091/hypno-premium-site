import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PrivacyPolicy from "../pages/privacy-policy";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 px-6 py-16">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
        <h2 className="text-2xl font-semibold tracking-widest text-[#c6a86b] mb-4">
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
        <h3 className="text-xl text-[#c6a86b] mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
           <li><Link to="/" className="hover:text-[#c6a86b] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#c6a86b] transition">About</Link></li>
            <li><Link to="/program" className="hover:text-[#c6a86b] transition">THRIVE Program</Link></li>
            <li><Link to="/pricing" className="hover:text-[#c6a86b] transition">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-[#c6a86b] transition">Contact</Link></li>
        </ul>
        </div>

            <div>
        <h3 className="text-xl text-[#c6a86b] mb-4">Legal</h3>
        <ul className="space-y-2 text-gray-400">
            <li><Link to="/privacy-policy" className="hover:text-[#c6a86b] transition">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-[#c6a86b] transition">Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-[#c6a86b] transition">Disclaimer</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-[#c6a86b] transition">Terms of Service</Link></li>
        </ul>
        </div>

        {/* CONTACT */}
        <div>
        <h3 className="text-xl text-[#c6a86b] mb-4">Contact</h3>
        <p className="text-gray-400 text-sm mb-2">
            📞 +91 8519833399
        </p>
        <p className="text-gray-400 text-sm mb-2">
            ✉ contact@sheshikiran.com
        </p>
        <p className="text-gray-400 text-sm">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            PLOT NO 119, NAVYA CHANDRA HOMES, Uppal Bhagayath, Hyderabad, Medchal Malkajgiri, Telangana - 50003
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

    );
}