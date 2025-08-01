type Config = Record<string, string | string[] | undefined>;

export type PrismaNameMapperConfig = {
  output?: string;
};

export const parseConfig = (config: Config): PrismaNameMapperConfig => ({
  output: config.output !== undefined ? String(config.output) : undefined,
});
