import React from "react";
import { Coffee, Github, Heart, ExternalLink } from "lucide-react";

export const Footer = () => (
  <footer className="w-full text-xs text-neutral-300 mt-10 backdrop-blur-md bg-gradient-to-t from-neutral-950/80 to-neutral-900/60 border-t border-neutral-800 shadow-[0_2px_16px_0_rgba(0,0,0,0.18)]">
    <div className=" mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Donation/Buy me a coffee */}
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[180px]">
        <a
          href="https://buymeacoffee.com/sheshnarayan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-100/10 border border-yellow-400/30 hover:bg-yellow-200/20 focus-visible:ring-2 focus-visible:ring-yellow-400/70 transition-all text-yellow-400 font-semibold shadow-sm group"
        >
          <Coffee
            size={20}
            className="inline-block drop-shadow-lg animate-bounce group-hover:scale-110 transition-transform"
          />
          <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 group-hover:after:w-full">
            Buy me a coffee
          </span>
        </a>
      </div>
      {/* Divider */}
      <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent mx-4" />
      {/* About Author */}
      <div className="flex flex-col items-center flex-1 min-w-[180px]">
        <span className="flex items-center gap-1 text-base font-medium">
          Made with <Heart size={16} className="text-red-400 animate-pulse" />{" "}
          by
          <a
            href="https://github.com/sndeshmukh00"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline decoration-primary/60 underline-offset-4 hover:text-primary hover:decoration-primary transition-colors font-semibold relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
          >
            Shesh Narayan Deshmukh
          </a>
        </span>
        <span className="text-[11px] mt-1 text-neutral-500 tracking-wide">
          MIT Licensed
        </span>
      </div>
      {/* Divider */}
      <div className="hidden sm:block h-12 w-px bg-gradient-to-b from-transparent via-neutral-700 to-transparent mx-4" />
      {/* Other Tools & Contribute */}
      <div className="flex flex-col items-center gap-2 flex-1 min-w-[180px]">
        <a
          href="https://github.com/sndeshmukh00/tailwind-color-finder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/30 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/70 transition-all text-primary-300 font-semibold shadow-sm group"
        >
          <Github size={18} className="inline-block" />
          <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
            Contribute on GitHub
          </span>
          <ExternalLink size={15} className="inline-block ml-1 opacity-80" />
        </a>
        <a
          href="#coming-soon"
          // target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/30 transition-all text-neutral-300 font-semibold mt-1 group"
        >
          <ExternalLink size={15} className="inline-block" />
          <span className="relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
            More Tools
          </span>
        </a>
      </div>
    </div>
  </footer>
);
