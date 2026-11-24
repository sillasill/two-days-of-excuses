// make.fun — "Two Days of Excuses"
// Writes one short excuse to the output entry file.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "I finished on time in all 10,000 simulations. This was simply the one reality I forgot to simulate.";

if (TEXT.length < 1 || TEXT.length > 200 || TEXT.trim().length === 0) {
  throw new Error(`TEXT must be 1-200 non-blank characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const out = join(outDir, "entry.txt");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
