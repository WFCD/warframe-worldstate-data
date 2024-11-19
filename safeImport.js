/**
 * Safely require path, fall back to fallback if module cannot load
 * @param  {string} path    Path to attempt to load
 * @param  {Object} fallback fallback response if error or no module
 * @returns {Promise<any>}         module or the default object
 */
const safeImport = async (path, fallback = {}) => {
  try {
    const mod = await import(path, path.includes('.json') ? { with: { type: 'json' } } : {});
    if (mod?.default) return mod.default;
    return mod;
  } catch (error) {
    if ((process.env.LOG_LEVEL || 'ERROR').toUpperCase() === 'DEBUG') {
      // eslint-disable-next-line no-console
      console.debug(`Failed to load module at ${path} ... returning fallback`);
    }
    return fallback;
  }
};

export default safeImport;
