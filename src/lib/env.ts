const missingValueError = (key: string) =>
  new Error(`Environment variable "$${key}" is missing. Please add it to your Vercel/Next.js environment.`);

export const getServerEnv = (key: string) => {
  const value = process.env[key];
  return value !== undefined ? value : null;
};

export const getRequiredServerEnv = (key: string) => {
  const value = getServerEnv(key);
  if (!value) {
    throw missingValueError(key);
  }
  return value;
};

export const getOptionalNumberEnv = (key: string) => {
  const raw = getServerEnv(key);
  if (!raw) {
    return null;
  }
  const parsed = Number(raw);
  if (Number.isNaN(parsed)) {
    throw new Error(`Environment variable "$${key}" must be a number.`);
  }
  return parsed;
};
