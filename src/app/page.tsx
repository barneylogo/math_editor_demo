import { MathEditorDemo } from "@/components/MathEditorDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-12">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Math Editor Demo
          </h1>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">
            Edit LaTeX with snippet buttons. Use{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
              \( ... \)
            </code>{" "}
            for inline math,{" "}
            <code className="rounded bg-zinc-200 px-1 dark:bg-zinc-800">
              \[ ... \]
            </code>{" "}
            for block math.
          </p>
        </header>

        <MathEditorDemo />
      </div>
    </div>
  );
}
