"use client";

import { useState } from "react";
import { MathEditor } from "./MathEditor";
import { MathRenderer } from "./MathRenderer";

const SAMPLE_QUESTION = String.raw`Solve \( x^2 - 4 = 0 \). Give your answer in simplest form.

A) \( x = 2 \)
B) \( x = -2 \)
C) \( x = \pm 2 \)
D) \( x = 4 \)`;

export function MathEditorDemo() {
  const [value, setValue] = useState(SAMPLE_QUESTION);

  return (
    <>
      <section className="mb-12 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold">Create / Edit Problem</h2>
        <MathEditor value={value} onChange={setValue} />
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold">How it looks to students</h2>
        <div className="rounded border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-600 dark:bg-zinc-800/50">
          <MathRenderer text={value || " "} className="text-lg leading-loose" />
        </div>
      </section>
    </>
  );
}
