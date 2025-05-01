// Color utility functions for Tailwind Color Finder

// Validate if string is a valid hex color (3 or 6 digits, with or without #)
export function isValidHex(hex) {
  return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

// Normalize hex: always 6 digits, always starts with #
export function normalizeHex(hex) {
  let h = hex.replace(/^#/, '');
  if (h.length === 3) h = h.split('').map(x => x + x).join('');
  return `#${h.toLowerCase()}`;
}

// Convert hex to [r,g,b]
export function hexToRgb(hex) {
  const h = normalizeHex(hex).slice(1);
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16)
  ];
}

// Euclidean distance in RGB space
export function colorDistance(rgb1, rgb2) {
  return Math.sqrt(
    Math.pow(rgb1[0] - rgb2[0], 2) +
    Math.pow(rgb1[1] - rgb2[1], 2) +
    Math.pow(rgb1[2] - rgb2[2], 2)
  );
}

// Find closest Tailwind color class
export function findClosestTailwindColor(inputHex, tailwindColours) {
  const inputRgb = hexToRgb(inputHex);
  let minDist = Infinity;
  let closest = null;
  Object.entries(tailwindColours).forEach(([className, hex]) => {
    if (normalizeHex(hex) === normalizeHex(inputHex)) {
      // Exact match
      minDist = 0;
      closest = { className, hex, distance: 0 };
      return;
    }
    const dist = colorDistance(inputRgb, hexToRgb(hex));
    if (dist < minDist) {
      minDist = dist;
      closest = { className, hex, distance: dist };
    }
  });
  return closest;
}
