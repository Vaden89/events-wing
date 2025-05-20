import { Button } from "@/components/ui/button";
import { BadgeCheck, Building2, CircleUserRound } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoadingButton } from "../LoadingButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

interface SignupProps {
  swapActiveSection: Dispatch<SetStateAction<string>>;
}

export const Signup = ({ swapActiveSection }: SignupProps) => {
  const [step, setStep] = useState("type");
  const [accountType, setAccountType] = useState("attendee");

  return (
    <div
      className={`w-full sm:w-1/2 flex flex-col justify-center items-start px-10 gap-4 mb-10 sm:mb-0 ${
        step === "type" ? "pt-[100px] sm:pt-16" : " sm:pt-16"
      }`}
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-semibold">Create an account</h1>
        <span className="text-gray-400">
          It&apos;s free to create an account and get started with EventWing!
        </span>
      </div>
      <StepProgress step={step} />
      {step === "type" ? (
        <AccountType
          accountType={accountType}
          setAccountType={setAccountType}
          setStep={setStep}
          swapActiveSection={swapActiveSection}
        />
      ) : step === "sign-up-form" ? (
        <SignupForm setStep={setStep} accountType={accountType} />
      ) : (
        <EmailConfirmation />
      )}
    </div>
  );
};

const StepProgress = ({ step }: { step: string }) => {
  return (
    <div className="hidden sm:flex items-center gap-2">
      <div
        className={`flex gap-2 items-center ${
          (step === "type" ||
            step === "sign-up-form" ||
            step === "confirmation") &&
          "text-primary font-semibold"
        }`}
      >
        <BadgeCheck />
        <span>Account type</span>
      </div>
      <span
        className={` ${
          (step === "type" ||
            step === "sign-up-form" ||
            step === "confirmation") &&
          "text-primary font-semibold"
        }`}
      >
        ---
      </span>
      <div
        className={`flex gap-2 items-center ${
          (step === "sign-up-form" || step === "confirmation") &&
          "text-primary font-semibold"
        }`}
      >
        <BadgeCheck />
        <span>Information form</span>
      </div>
      <span
        className={`${step === "confirmation" && "text-primary font-semibold"}`}
      >
        ---
      </span>
      <div
        className={`flex gap-2 items-center ${
          step === "confirmation" && "text-primary font-semibold"
        }`}
      >
        <BadgeCheck />
        <span>Email confirmation</span>
      </div>
    </div>
  );
};

const AccountType = ({
  setStep,
  accountType,
  setAccountType,
  swapActiveSection,
}: {
  accountType: string;
  setStep: Dispatch<SetStateAction<string>>;
  setAccountType: Dispatch<SetStateAction<string>>;
  swapActiveSection: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="w-2/3">Choose an account type</div>
      <div className="w-full grid  grid-cols-1 sm:grid-cols-2  gap-4">
        <div
          onClick={() => setAccountType("attendee")}
          className={`w-full h-[220px] sm:h-[300px] border rounded-lg flex flex-col justify-center items-center gap-2 text-center p-5 hover:shadow-md cursor-pointer transition-colors ease-in-out duration-20 text-gray-500 ${
            accountType === "attendee" && "text-primary border-primary"
          }`}
        >
          <CircleUserRound className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] " />
          <span className="text-xl sm:text-2xl font-semibold">Attendee</span>
          <p className="text-sm">
            Just want to attend an Event? This account is for your
          </p>
          <div
            className={`w-5 h-5 border mt-2 ${
              accountType === "attendee" && "bg-primary border-primary"
            } rounded-full flex items-center justify-center flex-col`}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
        <div
          onClick={() => setAccountType("host")}
          className={`w-full h-[220px] sm:h-[300px] border rounded-lg flex flex-col justify-center items-center gap-2 text-center p-5 hover:shadow-md cursor-pointer transition-colors ease-in-out duration-200 text-gray-500 ${
            accountType === "host" && "text-primary border-primary"
          }`}
        >
          <Building2 className="w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] " />
          <span className="text-xl sm:text-2xl font-semibold">Host</span>
          <p className="text-sm">
            Selling tickets as a <br /> Registered business? This is the account
            for you
          </p>
          <div
            className={`w-5 h-5 border mt-2 ${
              accountType === "host" && "bg-primary border-primary"
            } rounded-full flex items-center justify-center flex-col`}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
        <Button
          onClick={() => swapActiveSection("sign-in")}
          className="h-14 text-lg bg-primary opacity-65"
        >
          Cancel
        </Button>
        <Button
          onClick={() => setStep("sign-up-form")}
          className="h-14 text-lg"
        >
          Confirm
        </Button>
      </div>
      <div className="w-full flex justify-center gap-1">
        Already have an account?{" "}
        <button
          onClick={() => swapActiveSection("sign-in")}
          className="text-primary font-medium cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

const SignupForm = ({
  accountType,
  setStep,
}: {
  accountType: string;
  setStep: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className=" flex flex-col gap-5">
      {accountType === "attendee" ? (
        <AttendeeForm setStep={setStep} />
      ) : (
        <HostForm setStep={setStep} />
      )}
      <p className="text-gray-400 font-medium">
        By clicking Sign Up, I agree to the Event Wing Terms and Conditions and{" "}
        <br />
        Privacy Policy
      </p>
    </div>
  );
};

const EmailConfirmation = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-full p-8 flex flex-col items-center">
      <p className="text-gray-600 mb-6">
        Enter the 6-digit code sent to your email
      </p>

      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        value={value}
        onChange={setValue}
        className="gap-2 md:gap-4"
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <InputOTPSlot
            index={1}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <InputOTPSlot
            index={2}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <InputOTPSlot
            index={3}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <InputOTPSlot
            index={4}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
          <InputOTPSlot
            index={5}
            className="h-14 w-14 md:h-16 md:w-16 text-2xl border-2 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          />
        </InputOTPGroup>
      </InputOTP>

      <button
        disabled={!value}
        className="mt-6 px-6 py-2 bg-primary text-white rounded-md font-medium"
      >
        Verify
      </button>

      <p className="mt-4 text-gray-500 text-sm">
        Didn&apos;t receive a code?{" "}
        <span className="text-primary cursor-pointer">Resend</span>
      </p>
    </div>
  );
};

const AttendeeForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<string>>;
}) => {
  const [loading, setLoading] = useState(false);
  type Inputs = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    try {
      console.log(data);
      setStep("confirmation");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="firstName">First Name</label>
        <input
          className="w-full form-input"
          placeholder="e.g, Isaac"
          {...register("firstName", { required: true })}
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="lastName">Last Name</label>
        <input
          className="w-full form-input"
          placeholder="e.g, Isaac"
          {...register("lastName", { required: true })}
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="e.g, Isaac"
          className="w-full form-input"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full form-input"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message || "This field is required"}
          </span>
        )}
      </div>
      <div className="w-full flex gap-4">
        <Button
          onClick={() => setStep("type")}
          className="w-1/2 h-14 text-lg opacity-45"
        >
          Go back
        </Button>
        <LoadingButton
          loading={loading}
          type="submit"
          className="w-1/2 h-14 text-lg"
        >
          Sign up
        </LoadingButton>
      </div>
    </form>
  );
};

const HostForm = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<string>>;
}) => {
  const [loading, setLoading] = useState(false);
  type HostFormInputs = {
    businessName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HostFormInputs>();

  const passwordValue = watch("password");

  const onSubmit = (data: HostFormInputs) => {
    setLoading(true);
    try {
      console.log(data);
      setStep("confirmation");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="businessName">Business Name</label>
        <input
          className="w-full form-input"
          placeholder="e.g, Isaac"
          {...register("businessName", { required: true })}
        />
        {errors.businessName && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="e.g, Isaac"
          className="w-full form-input"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">This field is required</span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full form-input"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message || "This field is required"}
          </span>
        )}
      </div>
      <div className="w-full flex flex-col gap-1">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="w-full form-input"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === passwordValue || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message || "This field is required"}
          </span>
        )}
      </div>
      <div className="w-full flex gap-4">
        <Button
          onClick={() => setStep("type")}
          className="w-1/2 h-14 text-lg opacity-45"
        >
          Go back
        </Button>
        <LoadingButton
          loading={loading}
          type="submit"
          className="w-1/2 h-14 text-lg"
        >
          Sign up
        </LoadingButton>
      </div>
    </form>
  );
};
