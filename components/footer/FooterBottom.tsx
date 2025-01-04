"use client";

import { motion } from "framer-motion";

export function FooterBottom() {
    return (
        <motion.div
            className="mt-12 pt-8 border-t border-white/10 text-center"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
            }}
        >
            <motion.p
                className="text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </motion.p>
        </motion.div>
    );
}