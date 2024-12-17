import Image from 'next/image';
import { Building2, Users, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImg from '@/public/images/webImage/about1.png'
import oldMan from '@/public/images/webImage/man2.jpeg'
import youngBoy from '@/public/images/webImage/men.jpeg'
import busnwoman from '@/public/images/webImage/shippingWoman.jpeg'


export default function AboutPage() {
  return (
    <>
      <Header />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
        <div className="container relative z-10 mx-auto px-4 h-full flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About IMC Multiflexserve</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your trusted partner in e-commerce and professional services
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                To revolutionize the way people buy, sell, and access services by providing a comprehensive
                marketplace that connects businesses and individuals, making commerce and service procurement
                accessible, efficient, and reliable for everyone.
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To become the leading global platform that seamlessly integrates e-commerce, professional
                services, and custom solutions, empowering businesses and individuals to thrive in the
                digital economy.
              </p>
            </div>
            <div className="relative h-[400px]  ">
              <Image
                  src={aboutImg}
                alt="Team collaboration"
                fill
                  className=" rounded-lg   object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Values</h2>
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
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                position: 'Chief Executive Officer',
                image: oldMan,
              },
              {
                name: 'Sarah Johnson',
                position: 'Chief Operations Officer',
                image: busnwoman,
              },
              {
                name: 'Michael Chen',
                position: 'Chief Technology Officer',
                image: youngBoy,
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
      <Footer />
      </>
  );
}