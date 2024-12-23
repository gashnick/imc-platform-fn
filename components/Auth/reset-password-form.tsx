"use client";
import { useResetPasswordMutation } from "@/states/authentication";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { BackendErrorProps } from "./LoginForm";
import { useRouter } from "next/navigation";
interface IPasswordsForm {
    password: string;
    confirmPassword: string;
}

interface IResetPassProps {
    reset_code: string;
}
const ResetPasswordForm = ({ reset_code }: IResetPassProps ) => {
    const { register, handleSubmit, getValues, reset: resetForm, formState: { errors } } = useForm<IPasswordsForm>();
    const [ resetPassword , { isLoading, isError, isSuccess, error: backendError,reset } ] = useResetPasswordMutation();
    const router = useRouter();

    if(isError){
        const typedError = backendError as BackendErrorProps; // Type assertion
        toast.error(typedError?.data?.message || "Something Went Wrong while connecting to server.")
        reset()
      }
    
      if(isSuccess){
        toast.success("Password was Successfully reset, now you can login!")
        reset();
        resetForm();
        router.push("/login");
      }

    const onSubmit: SubmitHandler<IPasswordsForm> = async(data) => {
        const { password, confirmPassword } = data;
        if(password !== confirmPassword){
            return;
        }

        await resetPassword({ data, reset_code });
    };

    const getErrorMessage = ()=> {

        if(errors.password && getValues("password") !== ""){
            return "Password must be atleast 5 characters!";
        }
    
        if(getValues("password") !== getValues("confirmPassword"))
            return "Passwords Doesn't match!";
    }
    return (
        <form method="POST" className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label 
                    htmlFor="password" 
                    className="block text-sm font-medium text-gray-700"> Password </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password*"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 outline-none ${errors.password && "border-red-600 placeholder:text-red-600"}`}
                    {...register("password", {required: true, minLength: 5 })}
                />
            </div>
            <div>
                <label 
                    htmlFor="confirmPassword" 
                    className="block text-sm font-medium text-gray-700"> Confirm Password </label>
                <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Enter your password*"
                    className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 outline-none ${errors.confirmPassword && "border-red-600 placeholder:text-red-600"}`}
                    {...register("confirmPassword", {required: true, minLength: 5})}
                />
            </div>
            { errors && <p className="text-lg text-red-600">{ getErrorMessage() }</p>}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
            >
                { isLoading ? <ClipLoader color="white"/> : "Continue" }
            </button>
        </form>
    );
};

export default ResetPasswordForm;
