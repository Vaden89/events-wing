import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TicketDetailsInput } from "@/types/formTypes";
import { Plus, PlusCircle, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { LoadingButton } from "../LoadingButton";

export const AddTicket = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-fit h-10 mt-4 flex items-center gap-2 text-white bg-primary px-2 rounded-md shadow">
        <Plus />
        Add new ticket
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Ticket Details?</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col h-[60vh] overflow-y-auto noscroll">
          <TicketDetailsForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TicketDetailsForm = () => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TicketDetailsInput>({
    defaultValues: {
      perks: [{ text: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "perks",
  });

  const onSubmit = async (data: TicketDetailsInput) => {
    console.log(data);
  };

  const isPaid = watch("ticketType") === "paid";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="space-y-1">
        <label className=" text-gray-500 font-medium">
          What kind of ticket is it?
        </label>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="free"
              value="free"
              className="h-4 w-4 text-primary"
              {...register("ticketType", {
                required: "Please select a ticket type",
              })}
            />
            <label htmlFor="free" className="text-gray-700">
              Free
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="paid"
              value="paid"
              className="h-4 w-4 text-primary"
              {...register("ticketType", {
                required: "Please select a ticket type",
              })}
            />
            <label htmlFor="paid" className="text-gray-700">
              Paid
            </label>
          </div>
        </div>
        {errors.ticketType && (
          <p className="text-sm text-red-500 mt-1">
            {errors.ticketType.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Ticket name</label>
        <input
          type="text"
          className="border rounded-md px-2"
          {...register("name", { required: true, maxLength: 32 })}
        />
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name?.message}</span>
        )}
      </div>
      {isPaid && (
        <div className="flex flex-col gap-1">
          <label htmlFor="price">Ticket Price (Naira)</label>
          <input
            type="number"
            className="border rounded-md px-2"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-sm text-red-500">
              {errors.price?.message}
            </span>
          )}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <label htmlFor="quantity">Ticket Quantity</label>
        <input
          type="text"
          className="border rounded-md px-2"
          {...register("quantity", { required: true })}
        />
        {errors.quantity && (
          <span className="text-sm text-red-500">
            {errors.quantity?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="description">Ticket Description</label>
        <textarea
          className="border rounded-md px-2 py-1"
          rows={4}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-sm text-red-500">
            {errors.description?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label>Ticket Perks</label>
          <button
            type="button"
            className="flex items-center text-secondary text-sm"
            onClick={() => append({ text: "" })}
          >
            <PlusCircle size={16} className="mr-1" />
            Add Perk
          </button>
        </div>

        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-1">
            <div className="w-full flex gap-2">
              <input
                className="flex-1 border rounded-md px-2"
                {...register(`perks.${index}.text`, {
                  required: "Information about a perk is required",
                })}
                placeholder="Enter perk details"
              />
              {fields.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              )}
            </div>
            {errors.perks && errors.perks[index] && (
              <span className="text-sm text-red-500">
                {errors.perks[index].text?.message}
              </span>
            )}
          </div>
        ))}
      </div>
      <LoadingButton type="submit" className="text-lg h-10 mt-4">
        Save
      </LoadingButton>
    </form>
  );
};
