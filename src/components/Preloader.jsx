    import { motion } from "framer-motion";

    export default function Preloader() {
    return (
        <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-[#07090d] z-[9999] flex items-center justify-center"
        >
        <div className="text-center">

            <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl tracking-widest"
            >
            SHESHI KIRAN
            </motion.h1>

            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.4 }}
            className="h-[2px] bg-[#c6a86b] mx-auto mt-6"
            />

        </div>
        </motion.div>
    );
    }
