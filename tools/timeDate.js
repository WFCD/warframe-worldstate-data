const epochZero = {
  $date: {
    $numberLong: 0,
  },
};

const pieceIsSmoller = (seconds, ceiling, label, timePieces) => {
  if (seconds >= ceiling) {
    timePieces.push(`${Math.floor(seconds / ceiling)}${label}`);
    seconds = Math.floor(seconds) % ceiling;
  }
  return { seconds, timePieces };
};

/**
 * @param   {number} millis The number of milliseconds in the time delta
 * @returns {string} formatted time delta
 */
export const timeDeltaToString = (millis) => {
  if (typeof millis !== 'number') {
    throw new TypeError('millis should be a number');
  }

  let timePieces = [];
  const prefix = millis < 0 ? '-' : '';
  let seconds = Math.abs(millis / 1000);

  // Seconds in a day
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 86400, 'd', timePieces));

  // Seconds in an hour
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 3600, 'h', timePieces));

  // Seconds in a minute
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 60, 'm', timePieces));

  /* istanbul ignore else */
  if (seconds >= 0) {
    timePieces.push(`${Math.floor(seconds)}s`);
  }
  return `${prefix}${timePieces.join(' ')}`;
};

/**
 * Returns the number of milliseconds between now and a given date
 * @param   {Date} d         The date from which the current time will be subtracted
 * @param   {function} [now] A function that returns the current UNIX time in milliseconds
 * @returns {number}       The number of milliseconds after the given date to now
 */
export const fromNow = (d, now = Date.now) => {
  return d.getTime() - now();
};

/**
 * Returns the number of milliseconds between a given date and now
 * @param   {Date} d         The date that the current time will be subtracted from
 * @param   {function} [now] A function that returns the current UNIX time in milliseconds
 * @returns {number}        The number of milliseconds after now to the given date
 */
export const toNow = (d, now = Date.now) => {
  return now() - d.getTime();
};

/**
 * Returns a new Date constructed from a worldState date object
 * @param {Object} d The worldState date object
 * @returns {Date} parsed date from DE date format
 */
export const parseDate = (d) => {
  const safeD = d || epochZero;
  const dt = safeD.$date || epochZero.$date;
  return new Date(safeD.$date ? Number(dt.$numberLong) : 1000 * d.sec);
};

/**
 * An object containing functions to format dates and times
 * @typedef {Record<string, Function>}           TimeDateFunctions
 * @property {Function} timeDeltaToString - Converts a time difference to a string
 * @property {Function} fromNow           - Returns the number of milliseconds between now and
 *                                          a given date
 * @property {Function} toNow             - Returns the number of milliseconds between a given
 *                                          date and now
 */
export default {
  timeDeltaToString,
  fromNow,
  toNow,
  parseDate,
};
