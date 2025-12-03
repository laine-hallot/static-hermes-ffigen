#!/usr/bin/env node
import { once } from "node:events";
import child_process from "node:child_process";
import { resolve } from "node:path";

export const packageDir = import.meta.dirname;

export const workspaceRoot = resolve(import.meta.dirname, "../../../");

export const hermesPath = resolve(
  workspaceRoot,
  process.env.HERMES_PATH ?? "./vendor/hermes-src"
);

const ffigenPy = resolve(hermesPath, "./tools/ffigen/ffigen.py");
const ffigen = child_process.spawn(
  "python3",
  [ffigenPy, ...process.argv.slice(2)],
  {
    stdio: "inherit",
  }
);
const [buildCode] = await once(ffigen, "close");
process.exit(buildCode);
