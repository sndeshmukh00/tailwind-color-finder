import { useMemo } from 'react';
import { findClosestTailwindColor } from '../lib/colorUtils';
import { tailwindColours } from '../lib/tailwindColors';

// Memoized hook for finding closest Tailwind color
export function useClosestTailwindColor(inputHex) {
  return useMemo(() => {
    if (!inputHex) return null;
    return findClosestTailwindColor(inputHex, tailwindColours);
  }, [inputHex]);
}
