"use client";

import { motion } from "framer-motion";

const footerLinks = {
    Company: ["About"   , "Products", "Blog","Login","Sign up"],
    Support: ["Contact Us", "Safety", "Terms", "Privacy"],
    Services: ["Logistics ", "Web development", "Mobile development", "Grpaphic design", "Auto Shop", "Physical Services "],
    Resources: ["Documentation", "Guides", "Tutorials", "Webinars"],
};

export function FooterLinks() {
    return (
        <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-8"
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                    key={category}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: categoryIndex * 0.1 },
                        },
                    }}
                >
                    <h4 className="font-semibold text-lg mb-4">{category}</h4>
                    <ul className="space-y-3">
                        {links.map((link) => (
                            <motion.li
                                key={link}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.a
                                    href="#"
                                    className="text-gray-300 hover:text-white transition-colors duration-200
                    relative inline-block group"
                                    whileHover="hover"
                                >
                                    {link}
                                    <motion.span
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#25aae1]"
                                        variants={{
                                            hover: {
                                                width: "100%",
                                                transition: { duration: 0.3 },
                                            },
                                        }}
                                    />
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </motion.div>
    );
}