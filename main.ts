import { mkdirSync, writeFileSync } from "node:fs";

// Must stay byte-for-byte: single line, no trailing newline.
const LINE =
  "I ate your charger cable because it looked like a snack, and honestly, it tasted like victory.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
