"use client"

import React from "react";
import LoginForm from "@/components/Auth/LoginForm";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa"; 
const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Section: Login Form */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center bg-gray-50 px-8 py-16">
        <LoginForm />
      </div>

      {/* Right Section: Promotional Content */}
      <div className="lg:w-1/2 w-full relative">
  {/* Background Image */}
  <Image
          src="/mall.png"  // Changed to mall.png
          alt="IMC Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
  {/* Overlay Content */}
  <div className="relative flex flex-col justify-center items-center h-full bg-black/50 p-6">
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
    <div className="bg-blue-100 text-blue-600 rounded-full p-2">
                <FaThumbsUp className="h-6 w-6" />
              </div>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Top Stock Resources
      </h2>
      <p className="text-gray-600 mt-2">
        Today, we create innovative solutions to the challenges consumers
        face in everyday lives.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default LoginPage;
