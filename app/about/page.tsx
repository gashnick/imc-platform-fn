"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Users, Target, Award, LinkedinIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImg from '@/public/images/webImage/about1.png'
import oldMan from '@/public/images/webImage/man2.jpeg'
import youngBoy from '@/public/images/webImage/men.jpeg'
import busnwoman from '@/public/images/webImage/shippingWoman.jpeg'

export default function AboutPage() {
  // Variants for animated sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hover effect for core values
  const coreValueVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  // Team member hover effect
  const teamMemberVariants = {
    rest: {
      scale: 1,
      opacity: 0.8
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <Header />
      <motion.div
        initial="hidden"
        animate="visible"
        className="min-h-screen"
      >
        {/* Hero Section with Parallax-like Effect */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] bg-primary overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 animate-gradient-x" />
          <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center text-white">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                About IMC Multiflexserve
              </h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Your trusted partner in e-commerce and professional services
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission & Vision */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 bg-white"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-primary mb-6"
                >
                  Our Mission
                </motion.h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  To revolutionize the way people buy, sell, and access services by providing a comprehensive
                  marketplace that connects businesses and individuals, making commerce and service procurement
                  accessible, efficient, and reliable for everyone.
                </p>
                <motion.h2
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-bold text-primary mb-6"
                >
                  Our Vision
                </motion.h2>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading global platform that seamlessly integrates e-commerce, professional
                  services, and custom solutions, empowering businesses and individuals to thrive in the
                  digital economy.
                </p>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px]"
              >
                <Image
                  src={aboutImg}
                  alt="Team collaboration"
                  fill
                  className="rounded-lg object-contain hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-primary mb-12"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Building2,
                  title: 'Integrity',
                  description: 'We conduct business with the highest ethical standards and transparency.',
                },
                {
                  icon: Users,
                  title: 'Customer Focus',
                  description: 'Our customers success is our primary measure of achievement.',
                },
                {
                  icon: Target,
                  title: 'Innovation',
                  description: 'We continuously evolve and adapt to meet changing market needs.',
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in every service and product we offer.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={coreValueVariants}
                  initial="rest"
                  whileHover="hover"
                  className="text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-secondary transition-transform" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-center text-primary mb-12"
            >
              Our Leadership Team
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'John Smith',
                  position: 'Chief Executive Officer',
                  image: oldMan,
                  linkedin: '#',
                },
                {
                  name: 'Sarah Johnson',
                  position: 'Chief Operations Officer',
                  image: busnwoman,
                  linkedin: '#',
                },
                {
                  name: 'Michael Chen',
                  position: 'Chief Technology Officer',
                  image: youngBoy,
                  linkedin: '#',
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  variants={teamMemberVariants}
                  initial="rest"
                  whileHover="hover"
                  className="text-center group relative"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    >
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="text-white w-10 h-10 hover:text-blue-500" />
                      </a>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
}