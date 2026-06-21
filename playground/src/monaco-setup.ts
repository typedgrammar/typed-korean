/**
 * Self-host Monaco and its language workers via Vite instead of loading them
 * from a CDN. The CDN default (used by @monaco-editor/react out of the box)
 * loads the TypeScript web worker cross-origin, which silently fails in many
 * browsers — leaving a syntax-only editor with no real type checking. Bundling
 * the workers locally makes the editor genuinely run TypeScript everywhere.
 *
 * Import this module once, before the app renders.
 */
import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

// Hand @monaco-editor/react our locally-bundled monaco instance.
loader.config({ monaco });

/* Editor themes tinted to the "Dancheong" palette (see DESIGN.md / theme.css)
   so the code surface belongs to the same world as the rest of the app. The
   Analyzer picks "sakura-light" / "sakura-dark" based on the active app theme. */
monaco.editor.defineTheme("sakura-light", {
  base: "vs",
  inherit: true,
  rules: [
    { token: "comment", foreground: "b0a594", fontStyle: "italic" },
    { token: "keyword", foreground: "c8443c" },
    { token: "string", foreground: "2f8f5f" },
    { token: "number", foreground: "c08a1f" },
    { token: "type", foreground: "2f6f9f" },
    { token: "type.identifier", foreground: "2f6f9f" },
    { token: "identifier", foreground: "4a423b" },
    { token: "delimiter", foreground: "837a6e" },
  ],
  colors: {
    "editor.background": "#fffdf8",
    "editor.foreground": "#4a423b",
    "editorLineNumber.foreground": "#c8bca5",
    "editorLineNumber.activeForeground": "#a8322c",
    "editor.selectionBackground": "#f7e2dd",
    "editor.lineHighlightBackground": "#f0ebe0",
    "editorCursor.foreground": "#c8443c",
    "editorIndentGuide.background1": "#e6ddcd",
    "editorWidget.background": "#fffdf8",
    "editorWidget.border": "#e6ddcd",
  },
});

monaco.editor.defineTheme("sakura-dark", {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "7a7160", fontStyle: "italic" },
    { token: "keyword", foreground: "e07a6f" },
    { token: "string", foreground: "5cc79a" },
    { token: "number", foreground: "e0b857" },
    { token: "type", foreground: "7aa9ec" },
    { token: "type.identifier", foreground: "7aa9ec" },
    { token: "identifier", foreground: "d8cfc0" },
    { token: "delimiter", foreground: "a89e8c" },
  ],
  colors: {
    "editor.background": "#232019",
    "editor.foreground": "#d8cfc0",
    "editorLineNumber.foreground": "#5a5344",
    "editorLineNumber.activeForeground": "#e07a6f",
    "editor.selectionBackground": "#3a221e",
    "editor.lineHighlightBackground": "#2d2920",
    "editorCursor.foreground": "#e07a6f",
    "editorIndentGuide.background1": "#3a342a",
    "editorWidget.background": "#232019",
    "editorWidget.border": "#3a342a",
  },
});

export { monaco };
