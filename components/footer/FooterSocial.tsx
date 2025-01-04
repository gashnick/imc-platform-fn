"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const socialLinks = [
    { icon: Facebook, href: "#", color: "#1877f2" },
    { icon: Twitter, href: "#", color: "#1da1f2" },
    { icon: Instagram, href: "#", color: "#e4405f" },
    { icon: Linkedin, href: "#", color: "#0077b5" },
    { icon: Youtube, href: "#", color: "#ff0000" },
];

export function FooterSocial() {
    return (
        <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="flex justify-center space-x-6">
                {socialLinks.map(({ icon: Icon, href, color }, index) => (
                    <motion.a
                        key={index}
                        href={href}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 
              transition-colors duration-300"
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: color,
                        }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Icon className="w-5 h-5" />
                    </motion.a>
                ))}
            </div>
        </motion.div>
    );
}