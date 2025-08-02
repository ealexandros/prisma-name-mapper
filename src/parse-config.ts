import { GeneratorConfig } from "@prisma/generator-helper";

export type PrismaNameMapperConfig = {
  output?: string;
};

export const parseConfig = (config: GeneratorConfig): PrismaNameMapperConfig => ({
  output: config.output?.value ?? undefined,
});
