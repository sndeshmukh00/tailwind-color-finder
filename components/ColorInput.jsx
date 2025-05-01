import React from "react";
import { Input } from "@/components/ui/input";
import { isValidHex, normalizeHex } from "../lib/colorUtils";
import { Clipboard } from "lucide-react";
import { TooltipWrapper } from "./TooltipWrapper";

export function ColorInput({
  value,
  onChange,
  onPasteHex,
  onPasteFromClipboard,
  className,
}) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  // Paste event for clipboard
  const handlePaste = async (e) => {
    const pasted = e.clipboardData.getData("text");
    if (isValidHex(pasted)) {
      e.preventDefault();
      onPasteHex(normalizeHex(pasted));
    }
  };

  return (
    <div className={"flex flex-col gap-1 w-full " + className}>
      <div className="relative flex items-center flex-1 gap-2">
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onPaste={handlePaste}
          maxLength={7}
          placeholder="#f97316"
          className="w-full font-mono bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-base text-white focus:outline-none focus:ring-2 focus:ring-primary/70 placeholder:text-neutral-400 shadow-sm"
          aria-label="Hex color input"
          autoComplete="off"
        />
        <TooltipWrapper content="Paste color from clipboard">
          <button
            onClick={onPasteFromClipboard}
            aria-label="Paste color from clipboard"
            className="p-2 rounded-full border border-neutral-700 bg-neutral-800 hover:bg-primary/20 focus:ring-2 focus:ring-primary focus:outline-none transition-colors text-primary"
            type="button"
          >
            <Clipboard size={20} className="align-middle" />
          </button>
        </TooltipWrapper>
      </div>
      {value && !isValidHex(value) && (
        <div
          className="text-xs text-red-400 mt-1 ml-1"
          role="alert"
          aria-live="polite"
        >
          This is not a valid color code. Please recheck and enter a valid color
          code.
        </div>
      )}
    </div>
  );
}
