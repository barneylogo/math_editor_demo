"use client";

import { useState } from "react";
import { MathRenderer } from "./MathRenderer";

const SNIPPETS = [
  { label: "↵ New line", insert: "\n", raw: true },
  { label: "Fraction", insert: "\\frac{a}{b}" },
  { label: "x²", insert: "x^2" },
  { label: "√x", insert: "\\sqrt{x}" },
  { label: "±", insert: "\\pm" },
  { label: "≠", insert: "\\neq" },
  { label: "≤", insert: "\\leq" },
  { label: "≥", insert: "\\geq" },
  { label: "α", insert: "\\alpha" },
  { label: "β", insert: "\\beta" },
  { label: "π", insert: "\\pi" },
  { label: "θ", insert: "\\theta" },
  { label: "∑", insert: "\\sum_{i=1}^{n}" },
  { label: "∫", insert: "\\int_0^1" },
  { label: "∞", insert: "\\infty" },
] as const;

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export function MathEditor({ value = "", onChange, placeholder = "Type your math..." }: Props) {
  const [internalValue, setInternalValue] = useState(value);
  const isControlled = onChange !== undefined;
  const latex = isControlled ? value : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v = e.target.value;
    if (!isControlled) setInternalValue(v);
    onChange?.(v);
  };

  const insertSnippet = (snippet: string, raw = false) => {
    const textarea = document.getElementById("math-editor-textarea") as HTMLTextAreaElement;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = latex.slice(0, start);
    const after = latex.slice(end);
    const toInsert = raw ? snippet : `\\( ${snippet} \\)`;
    const next = before + toInsert + after;
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
    setTimeout(() => {
      textarea.focus();
      const newPos = start + toInsert.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 0);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Snippet palette */}
      <div className="flex flex-wrap gap-2">
        {SNIPPETS.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => insertSnippet(s.insert, "raw" in s && s.raw)}
            className="rounded border border-zinc-300 px-2 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800"
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Editor + Preview side by side */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium">LaTeX input</label>
          <textarea
            id="math-editor-textarea"
            value={latex}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full rounded border border-zinc-300 bg-white p-3 font-mono text-sm dark:border-zinc-600 dark:bg-zinc-900"
            rows={8}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Preview</label>
          <div className="min-h-[160px] rounded border border-zinc-300 bg-zinc-50 p-4 dark:border-zinc-600 dark:bg-zinc-900">
            <MathRenderer text={latex || " "} className="text-base leading-relaxed" />
          </div>
        </div>
      </div>
    </div>
  );
}
