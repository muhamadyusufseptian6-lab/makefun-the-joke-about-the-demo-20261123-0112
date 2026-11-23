// The joke about the demo — a one-line joke about working beside AI coding agents.
//
// Writes the joke to /output/entry.txt (or $OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE: string =
  "My AI coding agent narrated its fix so confidently during the live demo that the audience applauded \u2014 then it crashed the app in a way no human ever could.";

const outputDir: string = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
