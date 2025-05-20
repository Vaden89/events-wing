import { useForm } from "react-hook-form";
import { LoadingButton } from "../LoadingButton";
import { Lock, Mail } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export const Signin = ({
  swapActiveSection,
}: {
  swapActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="w-full sm:w-1/2 flex flex-col justify-center items-center gap-5 p-10 sm:px-20">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Welcome back!</h1>
        <span className="text-gray-400">
          Authenticate with your email address and continue to EventWing!
        </span>
      </div>
      <SigninForm />
      <button
        onClick={() => swapActiveSection("sign-up")}
        className="cursor-pointer"
      >
        Don&apos;t have an account?{" "}
        <span className="font-medium text-primary">Register</span>
      </button>
    </div>
  );
};

const SigninForm = () => {
  type LoginInputs = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit = (data: LoginInputs) => console.log(data);

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <div className="w-full flex items-center gap-2 form-input">
          <Mail color="gray" />
          <input
            type="text"
            {...register("email")}
            className="w-full"
            placeholder="Email"
          />
        </div>
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <div className="w-full flex items-center gap-2 form-input">
          <Lock color="gray" />
          <input
            type="password"
            {...register("password")}
            className="w-full"
            placeholder="Password"
          />
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <LoadingButton className="text-lg h-12 mt-4">Login</LoadingButton>
    </form>
  );
};
