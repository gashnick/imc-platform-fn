"use client";
import { useForgotPasswordMutation } from "@/states/authentication";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { BackendErrorProps } from "./LoginForm";
interface EmailFormInputs {
  email: string;
}
const ForgotPasswordForm = () => {
  const { register, handleSubmit, resetField, formState: { errors } } = useForm<EmailFormInputs>();
  const [forgotPassword, { isLoading, isError, isSuccess, error: backendError, reset }] = useForgotPasswordMutation();

  if (isError) {
    const typedError = backendError as BackendErrorProps; // Type assertion
    toast.error(typedError?.data?.message || "Something Went Wrong while connecting to server.")
    reset()
  }

  if (isSuccess) {
    toast.success("Email was Successfully sent to your inbox!")
    reset();
    resetField("email");
  }

  const onSubmit: SubmitHandler<EmailFormInputs> = async (data) => {
    await forgotPassword(data)
  };

  return (
    <form method="POST" className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"> Email </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email*"
          className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 outline-none ${errors.email && "border-red-600 placeholder:text-red-600"}`}
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </div>
      <button
        type="submit"
        className={`w-full bg-blue-500 text-white flex items-center justify-center py-2 rounded-lg shadow hover:bg-blue-600 outline-none transition duration-300 ${isLoading && "cursor-not-allowed"}`}
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader color="white" /> : "Continue"}
      </button>
    </form>
  );
};

export default ForgotPasswordForm;