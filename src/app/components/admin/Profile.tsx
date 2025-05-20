"use client";
import { Button } from "@/components/ui/button";
import { ProfileDetailsInput } from "@/types/formTypes";
import { useForm } from "react-hook-form";

export const Profile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProfileDetailsInput>({
    defaultValues: {
      email: "isaacshosanya89@gmail.com",
      firstName: "Isaac",
      lastName: "Shosanya",
      phone: "09062124322",
    },
  });

  const onSubmit = (data: ProfileDetailsInput) => {
    console.log(data);
  };

  return (
    <div className="w-full flex flex-col">
      <span className="text-lg font-semibold">Personal Details</span>
      <form
        className="w-full grid grid-cols-2 gap-8 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="border rounded-md px-2"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="border rounded-md px-2"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="border rounded-md px-2"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            disabled={true}
            className="border rounded-md px-2 cursor-not-allowed bg-gray-200"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <Button className="w-fit h-10">Update</Button>
      </form>
    </div>
  );
};
