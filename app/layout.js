import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const metadata = {
  title: "Tailwind Color Class Finder",
  description:
    "Find the closest Tailwind CSS color class for any hex color input. Instantly match hex to Tailwind, copy classes, and improve your workflow. Modern, minimalist, and open-source.",
};

export async function generateMetadata({ params }) {
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Find the closest Tailwind CSS color class for any hex color input. Instantly match hex to Tailwind, copy classes, and improve your workflow. Modern, minimalist, and open-source." />
      </head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
