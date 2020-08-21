type EnvValue = string | undefined | null;

const getEnv = (key: string): EnvValue => {
  return process.env[key];
};

export const version = getEnv('WEBSITE_VERSION') || 'bogus-version';
