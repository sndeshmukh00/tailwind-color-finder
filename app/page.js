"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "../components/Layout";
import { TooltipWrapper } from "@/components/TooltipWrapper";
import { Clipboard } from "lucide-react";
import { ColorInput } from "../components/ColorInput";
import { ColorPreview } from "../components/ColorPreview";
import { ClipboardButton } from "../components/ClipboardButton";
import { useClipboard } from "../hooks/useClipboard";
import { useClosestTailwindColor } from "../hooks/useClosestTailwindColor";
import { isValidHex, normalizeHex } from "../lib/colorUtils";

export default function Home() {
  const [input, setInput] = useState("");
  const [autoFilled, setAutoFilled] = useState(false);
  const { readColor } = useClipboard();
  const closest = useClosestTailwindColor(
    isValidHex(input) ? input : "#f97316"
  );

  // Auto-detect clipboard for valid color
  useEffect(() => {
    if (!autoFilled && typeof window !== "undefined" && navigator.clipboard) {
      readColor().then((color) => {
        if (color) {
          setInput(color);
          setAutoFilled(true);
        }
      });
    }
  }, [autoFilled, readColor]);

  // Handler for input
  const handleInput = useCallback((val) => setInput(val), []);
  const handlePasteHex = useCallback((val) => setInput(val), []);

  // Manual clipboard paste button
  const handlePasteFromClipboard = async () => {
    const color = await readColor();
    if (color) setInput(color);
  };

  return (
    <Layout>
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold tracking-tight">
          Find the Closest Tailwind CSS Color Class
        </h2>
        <div className="bg-neutral-900/90 rounded-2xl p-8 shadow-xl w-full max-w-xl border border-neutral-800 flex flex-col items-center gap-7">
          <div className="flex items-center w-full gap-3 mb-2">
            <ColorInput
              value={input}
              onChange={handleInput}
              onPasteHex={handlePasteHex}
              onPasteFromClipboard={handlePasteFromClipboard}
              className="flex-1"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            <div className="flex flex-col items-center bg-neutral-800/80 rounded-xl border-2 border-neutral-700 shadow-sm p-5 transition-all">
              <h2 className="text-lg font-bold tracking-tight text-white mb-2">
                Input Color
              </h2>
              <ColorPreview
                label="Input Color"
                hex={isValidHex(input) ? normalizeHex(input) : "#f97316"}
                className="mb-2"
              />
            </div>
            <div className="flex flex-col items-center bg-neutral-800/80 rounded-xl border-2 border-primary shadow-sm p-5 transition-all">
              <h2 className="text-lg font-bold tracking-tight text-white mb-2">
                Closest Tailwind Color
              </h2>
              <ColorPreview
                label={closest ? `Tailwind: ${closest.className}` : "Closest"}
                hex={closest ? closest.hex : "#f97316"}
                className="mb-2"
              />
            </div>
          </div>
          {closest && (
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-base font-mono px-3 py-1 rounded-lg bg-primary/10 text-primary-300 border border-primary/40 select-all">
                {closest ? closest.className : "-"}
              </span>

              <TooltipWrapper content="Copy Tailwind class">
                <span>
                  <ClipboardButton
                    value={closest.className}
                    label={"Copy Tailwind class"}
                    className="p-2 rounded-full hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary outline-none transition-colors"
                    iconOnly
                  >
                    <Clipboard size={18} />
                  </ClipboardButton>
                </span>
              </TooltipWrapper>
            </div>
          )}
          <div className="w-full border-t my-7 border-neutral-800" />
          <section className="w-full flex flex-col gap-2 text-xs text-neutral-400">
            <div className="font-semibold">Upcoming features:</div>
            <ul className="list-disc pl-6">
              <li>
                Support for RGB, HSL, and other color formats{" "}
                <span className="italic">(TODO)</span>
              </li>
              <li>
                Show top 3 closest Tailwind matches{" "}
                <span className="italic">(TODO)</span>
              </li>
              <li>
                Prefix toggling: bg-, text-, border-{" "}
                <span className="italic">(TODO)</span>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  );
}
