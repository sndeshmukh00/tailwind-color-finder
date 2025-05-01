import * as React from "react";
import { Palette } from "lucide-react";
import { TooltipWrapper } from "@/components/TooltipWrapper";
import { cn } from "@/lib/utils";
import { isValidHex, normalizeHex } from "@/lib/colorUtils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "file:text-foreground placeholder:text-neutral-400 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm items-center",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
    >
      <input
        type={type}
        data-slot="input"
        {...props}
        className="w-full mr-2 outline-none"
      />
      <TooltipWrapper content="Select color from here">
        <label
          htmlFor="color-picker"
          className="cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          <Palette
            size={22}
            className="text-primary hover:text-primary-400 focus-visible:ring-2 focus-visible:ring-primary rounded transition-colors"
          />
        </label>
      </TooltipWrapper>
      <input
        id="color-picker"
        type="color"
        value={isValidHex(props.value) ? normalizeHex(props.value) : "#f97316"}
        onChange={props.onChange}
        aria-label="Color picker"
        className="absolute right-10 opacity-0 w-6 h-6 cursor-pointer"
        tabIndex={0}
      />
    </div>
  );
}

export { Input };
