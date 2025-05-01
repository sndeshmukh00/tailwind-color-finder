import React from "react";
import { Button } from "@/components/ui/button";
import { useClipboard } from "../hooks/useClipboard";
import { Clipboard } from "lucide-react";

export function ClipboardButton({ value, label = "Copy", className, iconOnly = false, children }) {
  const { copy } = useClipboard();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (await copy(value)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  if (iconOnly) {
    return (
      <span className="relative inline-block">
        {copied && (
          <span
            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded shadow z-50 transition-opacity"
            role="status"
            aria-live="polite"
          >
            Copied!
          </span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className={className}
          aria-label={label || "Copy to clipboard"}
          title={copied ? "Copied!" : label || "Copy to clipboard"}
          onClick={handleCopy}
        >
          {children || <Clipboard size={18} />}
        </Button>
      </span>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className={className}
      aria-label={label}
      onClick={handleCopy}
    >
      {copied ? "Copied!" : (children || label)}
    </Button>
  );
}
