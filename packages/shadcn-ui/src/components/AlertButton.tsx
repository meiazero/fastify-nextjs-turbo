"use client";

import { cn } from "../lib/utils";

interface AlertButtonProps {
  className?: string;
  content?: string;
  children?: React.ReactNode;
}

export function AlertButton({
  className,
  content,
  children,
}: AlertButtonProps) {
  return (
    <button
      className={cn("", className)}
      onClick={() => {
        alert("Hello world!");
      }}
    >
      {content ? (
        <span className="text-sm font-medium">{content}</span>
      ) : (
        children
      )}
    </button>
  );
}
