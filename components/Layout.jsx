import React from "react";
import Head from "next/head";
import { cn } from "../lib/utils";
import { Footer } from "../components/Footer";

export function Layout({
  children,
  title = "Tailwind Color Class Finder",
  description = "Find the closest Tailwind CSS color class for any hex color input. Modern, minimalist, and open-source.",
  ogImage = "/og.png",
}) {
  // Always dark mode: set .dark on html
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <div
        className={cn(
          "min-h-screen bg-background text-foreground transition-colors duration-300 dark"
        )}
      >
        <header className="w-full flex items-center px-4 py-3 border-b border-neutral-800 bg-neutral-950/80">
          <h1 className="text-lg font-bold tracking-tight text-white text-center items-center justify-center w-full">
            Tailwind Color Class Finder
          </h1>
        </header>
        <main className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
