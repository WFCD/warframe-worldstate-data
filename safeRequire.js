'use strict';

/**
 * Safely require path, fall back to fallback if module cannot loa
 * @param  {[type]} path    Path to attempt to load
 * @param  {[type]} fallback [description]
 * @returns {any}         module or the default object
 */
const safeRequire = (path, fallback = {}) => {
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    return require(path);
  } catch (error) {
    if ((process.env.LOG_LEVEL || 'ERROR').toUpperCase() === 'DEBUG') {
      // eslint-disable-next-line no-console
      console.debug(`Failed to load module at ${path} ... returning fallback`);
    }
    return fallback;
  }
};

module.exports = safeRequire;
