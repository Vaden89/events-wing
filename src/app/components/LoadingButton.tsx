import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { forwardRef } from "react";

type LoadingButtonProps = React.ComponentProps<"button"> & {
  loading?: boolean;
};

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  function LoadingButton({ loading, children, ...props }, ref) {
    const isLoading = loading;

    return (
      <Button ref={ref} disabled={isLoading} {...props}>
        <>
          {isLoading && <Loader2 className="ml-2 h-5 w-5 animate-spin" />}
          {children}
        </>
      </Button>
    );
  }
);

LoadingButton.displayName = "LoadingButton";
