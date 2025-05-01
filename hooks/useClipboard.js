import { useCallback } from "react";
import { isValidHex, normalizeHex } from "../lib/colorUtils";

// Try to extract a color from clipboard text (currently hex only, future: rgb/hsl)
export function extractColorFromClipboard(text) {
  if (!text) return null;
  // Only hex for now
  if (isValidHex(text)) return normalizeHex(text);
  // TODO: Add rgb/hsl detection here
  return null;
}

// Clipboard read/write utilities
export function useClipboard() {
  // Write to clipboard
  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }, []);

  // Read from clipboard
  const read = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch {
      return null;
    }
  }, []);

  // Read and extract color
  const readColor = useCallback(async () => {
    const text = await read();
    return extractColorFromClipboard(text);
  }, [read]);

  return { copy, read, readColor };
}
