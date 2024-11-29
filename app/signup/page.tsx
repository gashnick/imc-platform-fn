import React from "react";
import SignupForm from "@/components/Auth/SignupForm";
import Image from "next/image";
//import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Section: Signup Form */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center px-8 py-16 bg-white">
       {/* Logo */}
       <div className="absolute top-4 left-4">
        <Image
          src="/logo.png"
          alt="IMC Logo"
          width={64}
          height={64}
          priority
        />
      </div>
       <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 px-8 py-16">
        <SignupForm />
      </div>
      </div>

      {/* Right Section: Promotional Content */}
      <div className="lg:w-1/2 w-full relative">
        <Image
          src="/mall.png"  // Changed to mall.png
          alt="IMC Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 max-w-sm text-center bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-gray-800">Imc Stock</h2>
            <p className="text-gray-600 text-sm">
              Shop the Best Products from Across the Internet, Delivered to You Anytime, Anywhere.
            </p>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;
