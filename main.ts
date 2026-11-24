// long-roast-lawmakers-pdf — entry for bounty u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
// Writes exactly one satirical sentence to /output/entry.txt (UTF-8, no trailing newline).
// The guards below mirror the bounty gate (1-320 chars, exactly one sentence)
// so an invalid entry fails loudly here instead of failing silently on the server.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "The committee that spent three years drafting the Universal Document Format Act still passes its own bill around as a Pages file nobody in the building can open, let alone convert to PDF.";

if (ENTRY_TEXT.includes("\n") || ENTRY_TEXT.includes("\r")) {
  throw new Error("entry text must not contain a newline");
}
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 320) {
  throw new Error(
    `entry text must be 1-320 characters, got ${ENTRY_TEXT.length}`,
  );
}
const periodCount = [...ENTRY_TEXT].filter((ch) => ch === ".").length;
if (periodCount !== 1) {
  throw new Error(
    `entry text must contain exactly one period, got ${periodCount}`,
  );
}
if (!/^[A-Z]/.test(ENTRY_TEXT) || !ENTRY_TEXT.endsWith(".")) {
  throw new Error(
    "entry text must start with a capital letter and end with a single period",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
