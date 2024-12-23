import ResetPasswordForm from "@/components/Auth/reset-password-form";
import Image from "next/image";// Import the form

interface IResetProps {
    params: {
        reset_code: string;
    }
}

const ResetPassword = ({ params: { reset_code } }: IResetProps ) => {
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
        <h1 className="text-3xl font-bold text-gray-900 text-center pb-2">Reset password</h1>

        {/* Forgot Password Form */}
        <ResetPasswordForm reset_code={ reset_code }/> {/* Using the form here */}
      </div>

      {/* Right Section: Background Image */}
      <div className=" lg:block lg:w-1/2 h-lvh relative">
        <Image
          src="/forgot-password.jpeg"
          alt="Forgot Password"
          fill
          priority
          className="object-cover rounded-l-lg grayscale"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
