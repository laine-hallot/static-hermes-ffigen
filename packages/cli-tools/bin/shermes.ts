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

const shermesBin = resolve(hermesPath, "./build/bin/shermes");
const shermes = child_process.spawn(shermesBin, process.argv.slice(2), {
  stdio: "inherit",
});

const [buildCode] = await once(shermes, "close");

process.exit(buildCode);
