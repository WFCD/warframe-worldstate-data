/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/**
 * Safely require path, fall back to fallback if module cannot load
 * @param  {string} path    Path to attempt to load
 * @param  {Object} fallback fallback response if error or no module
 * @returns {Promise<any>}         module or the default object
 */
const safeImport = async <T>(path: string, fallback?: T): Promise<T> => {
  try {
    const mod: any = await import(path, path.includes('.json') ? { with: { type: 'json' } } : {});
    if (mod?.default as object) return mod.default as T;
    return mod as T;
  } catch (error) {
    if ((process.env.LOG_LEVEL || 'ERROR').toUpperCase() === 'DEBUG') {
      // eslint-disable-next-line no-console
      console.debug(`Failed to load module at ${path} ... returning fallback`);
    }

    if (!fallback) throw Error('fallback value not given');
    return fallback;
  }
};

export default safeImport;
