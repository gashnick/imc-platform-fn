import Image from "next/image";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm"; // Import the form

const ForgotPassword = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-50">

      {/* Left Section: Form and Information */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16">
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

        {/* Title and Information */}
        <h1 className="text-3xl font-bold text-gray-900 max-md:mt-20 max-md:text-center">Forgot password?</h1>
        <p className="mt-4 text-sm text-gray-700 max-md:text-center">
          Please Enter the email address you'd like your password reset information sent to.
        </p>

        {/* Forgot Password Form */}
        <ForgotPasswordForm /> {/* Using the form here */}
      </div>

      {/* Right Section: Background Image */}
      <div className=" lg:block lg:w-1/2 h-lvh relative">
        <Image
          src="/forgot-password.jpeg"
          alt="Forgot Password"
          fill
          priority
          className="object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;