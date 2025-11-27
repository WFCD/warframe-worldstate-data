/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * Safely require path, fall back to fallback if module cannot load
 * @param  {string} path    Path to attempt to load
 * @param  {Object} fallback fallback response if error or no module
 * @returns {Promise<any>}         module or the default object
 */
export const safeImport = async <T>(path: string, fallback: T = {} as T): Promise<T> => {
  try {
    const mod: T | { default: T } = path.includes('.json')
      ? await import(path, { with: { type: 'json' } })
      : await import(path);
    return (mod as { default: T }).default || (mod as T);
  } catch (error) {
    if ((process.env.LOG_LEVEL || 'ERROR').toUpperCase() === 'DEBUG') {
      console.debug(`Failed to load module at ${path} ... returning fallback`);
    }

    return fallback;
  }
};

