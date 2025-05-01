import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * TooltipWrapper: A composable wrapper for shadcn/ui Tooltip usage.
 * Usage:
 * <TooltipWrapper content="Tooltip text"><button>...</button></TooltipWrapper>
 */
export const TooltipWrapper = ({ content, children, side = "top", align = "center", ...props }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align} className="z-50" {...props}>
        {content}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
