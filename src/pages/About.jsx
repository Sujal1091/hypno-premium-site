    import { motion } from "framer-motion";

    export default function About() {
    return (
        <div className="bg-[#07090d] text-white min-h-screen px-6 py-24">

        <motion.div
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            className="max-w-5xl mx-auto text-center"
        >
            <h1 className="text-5xl mb-6">About Sheshi Kiran</h1>

            <p className="text-gray-300 text-lg leading-relaxed">
            Certified professional hypnotherapist and executive performance
            coach helping senior IT leaders eliminate burnout and reclaim
            peak clarity, energy and leadership confidence.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 p-6 rounded-xl">100+ Leaders Transformed</div>
            <div className="bg-white/5 p-6 rounded-xl">60-Day THRIVE System</div>
            <div className="bg-white/5 p-6 rounded-xl">Hyderabad & Bangalore</div>
            </div>
        </motion.div>

        </div>
    );
    }
