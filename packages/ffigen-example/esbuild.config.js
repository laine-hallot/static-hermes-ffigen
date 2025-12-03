import esbuild from "esbuild";

const outDirArgIndex = process.argv.findIndex((arg) => arg === "--outdir");
const outdir =
  outDirArgIndex === -1
    ? undefined
    : (() => {
        const outdirValue = process.argv[outDirArgIndex + 1];
        if (outdirValue === undefined) {
          console.error("--outdir argument passed but no value was provided");
          exit();
        }
        return outdirValue;
      })();

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    write: true,
    bundle: true,
    outdir: outdir ?? "./dist/",
    sourcemap: true,
  })
  .catch(() => process.exit(1));
