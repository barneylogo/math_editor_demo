"use client";

import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

type Props = {
  text: string;
  className?: string;
};

/**
 * Renders text with LaTeX support.
 * Inline math: \( ... \)
 * Block math: \[ ... \]
 */
export function MathRenderer({ text, className = "" }: Props) {
  const html = useMemo(() => {
    if (!text.trim()) return "";
    try {
      return text
        .replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => {
          try {
            return katex.renderToString(math.trim(), {
              displayMode: true,
              throwOnError: false,
            });
          } catch {
            return `<span class="text-red-500">[LaTeX error]</span>`;
          }
        })
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => {
          try {
            return katex.renderToString(math.trim(), {
              displayMode: false,
              throwOnError: false,
            });
          } catch {
            return `<span class="text-red-500">(LaTeX error)</span>`;
          }
        });
    } catch {
      return text;
    }
  }, [text]);

  return (
    <div
      className={`math-renderer ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
