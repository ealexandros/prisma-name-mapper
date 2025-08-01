import type { GeneratorManifest } from "@prisma/generator";

export const onManifest = (): GeneratorManifest => {
  let version: string | undefined;

  try {
    const pkg = require("../package.json");
    version = pkg.version;
  } catch {}

  return {
    version,
    defaultOutput: "generated/mapper/index.ts",
    prettyName: "Prisma Name Mapper Generator",
  };
};
