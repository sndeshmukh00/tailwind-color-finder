import React from "react";
import { cn } from "../lib/utils";

// Shows a color swatch with border, label, and hex/class
export function ColorPreview({ label, color, className, hex }) {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div
        className={cn(
          "w-16 h-16 rounded-lg border-2 shadow-sm",
          "transition-colors duration-200",
          "flex items-center justify-center"
        )}
        style={{ backgroundColor: hex }}
      />
      <span className="text-xs font-medium text-neutral-400 select-all">
        {label}
      </span>
      <span className="text-xs text-neutral-400 select-all">{hex}</span>
    </div>
  );
}
