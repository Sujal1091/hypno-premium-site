    import { motion } from "framer-motion";

    export default function Preloader() {
    return (
        <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-[#07090d] z-[9999] flex items-center justify-center"
        >
        <div className="text-center">

            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl text-[#c6a86b] tracking-widest"
            >
            SHESHI KIRAN
            </motion.h1>

            <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-[#c6a86b] mx-auto mt-6 origin-left w-[200px]"
            />

        </div>
        </motion.div>
    );
    }