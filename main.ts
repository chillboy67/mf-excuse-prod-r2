// One-line AI excuse for breaking production, handed to the grader.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse is a single line; entry.txt is the only output the grader reads.
const excuse =
  "I didn't break production — I just gave it a surprise feature: a day off.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
const dest = join(out, "entry.txt");
writeFileSync(dest, excuse + "\n", { encoding: "utf8" });
console.log(`Wrote ${excuse.length}-character excuse to ${dest}`);
