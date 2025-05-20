import { Button } from "@/components/ui/button";
import { categories } from "@/resources/dummyData";
import { EventDetailsInput } from "@/types/formTypes";
import { ChevronDown, Instagram, Link, Twitter } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

export const EventDetails = ({
  next,
}: {
  next: Dispatch<SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventDetailsInput>();

  const onSubmit = async (data: EventDetailsInput) => {
    console.log(data);
    next("ticket");
  };

  return (
    <div className="w-full flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Event name</label>
          <input
            type="text"
            {...register("name", { required: "Event name is required" })}
            className="w-full h-12 border px-4 rounded-md"
            placeholder="Event name"
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="location">Location of event</label>
          <input
            type="text"
            {...register("location", { required: "Location is required" })}
            className="w-full h-12 border px-4 rounded-md"
            placeholder="Location of event"
          />
          {errors.location && (
            <span className="text-red-500 text-sm">
              {errors.location.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="custom_url">Use custom URL</label>
          <div className="flex items-center border px-4 rounded-md h-12">
            <span className="border-r pr-4">eventswing.africa/discover/</span>
            <input
              type="text"
              {...register("custom_url", {
                maxLength: {
                  value: 12,
                  message: "Custom URL cannot exceed 12 characters",
                },
              })}
              className="w-full px-4 rounded-md"
              placeholder="custom-url"
            />
          </div>
          {errors.custom_url && (
            <span className="text-red-500 text-sm">
              {errors.custom_url.message}
            </span>
          )}
        </div>

        <span className="text-lg font-medium mt-4">
          What kind of event is it?
        </span>

        <div className="flex flex-col gap-1">
          <label htmlFor="category">
            Select the applicable category for your event
          </label>
          <div className="relative">
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              className={`w-full h-12 px-4 pr-10 appearance-none rounded-lg border-2 
                ${errors.category ? "border-red-500" : "border-gray-300"} 
                bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
                transition-all duration-200`}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDown
                className={`h-5 w-5 ${
                  errors.category ? "text-red-500" : "text-gray-400"
                }`}
              />
            </div>
          </div>
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>

        <span className="text-lg font-medium mt-4">When is your event?</span>
        <div className="flex flex-col gap-1">
          <label htmlFor="date">Start Date and Time</label>
          <div className="w-full grid grid-cols-2 gap-4">
            <input
              type="date"
              {...register("date", { required: "Date is required" })}
              className="w-full h-12 px-4 rounded-md border"
            />
            <input
              type="time"
              {...register("time", { required: "Time is required" })}
              className="w-full h-12 px-4 rounded-md border"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              {errors.date && (
                <span className="text-red-500 text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div>
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <span className="text-lg font-medium mt-4">Social Details</span>
        <div className="flex flex-col gap-4">
          <div className="w-full flex items-center px-4 border rounded-md h-12">
            <span className="border-r px-4">
              <Link size={20} />
            </span>
            <input
              type="text"
              {...register("website")}
              className="w-full px-4"
              placeholder="Your website url"
            />
          </div>
          <div className="w-full flex items-center px-4 border rounded-md h-12">
            <span className="border-r px-4">
              <Instagram size={20} />
            </span>
            <input
              type="text"
              {...register("instagram")}
              className="w-full px-4"
              placeholder="Your Instagram Handle"
            />
          </div>
          <div className="w-full flex items-center px-4 border rounded-md h-12">
            <span className="border-r px-4">
              <Twitter size={20} />
            </span>
            <input
              type="text"
              {...register("twitter")}
              className="w-full px-4"
              placeholder="Your Twitter handle"
            />
          </div>
          <div className="w-full flex justify-end">
            <Button type="submit" className="h-12 font-medium text-lg w-fit">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
