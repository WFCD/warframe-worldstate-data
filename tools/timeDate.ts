const epochZero: ContentTimestamp = {
  $date: {
    $numberLong: 0,
  },
};

export const pieceIsSmoller = (
  seconds: number,
  ceiling: number,
  label: string,
  timePieces: string[],
) => {
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
export const timeDeltaToString = (millis: number): string => {
  if (typeof millis !== "number") {
    throw new TypeError("millis should be a number");
  }

  let timePieces: string[] = [];
  const prefix = millis < 0 ? "-" : "";
  let seconds = Math.abs(millis / 1000);

  // Seconds in a day
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 86400, "d", timePieces));

  // Seconds in an hour
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 3600, "h", timePieces));

  // Seconds in a minute
  ({ seconds, timePieces } = pieceIsSmoller(seconds, 60, "m", timePieces));

  /* istanbul ignore else */
  if (seconds >= 0) {
    timePieces.push(`${Math.floor(seconds)}s`);
  }
  return `${prefix}${timePieces.join(" ")}`;
};

/**
 * Returns the number of milliseconds between now and a given date
 * @param   {Date} d         The date from which the current time will be subtracted
 * @param   {function} [now] A function that returns the current UNIX time in milliseconds
 * @returns {number}       The number of milliseconds after the given date to now
 */
export const fromNow = (d: Date, now: () => number = Date.now): number => {
  return d.getTime() - now();
};

/**
 * Returns the number of milliseconds between a given date and now
 * @param   {Date} d         The date that the current time will be subtracted from
 * @param   {function} [now] A function that returns the current UNIX time in milliseconds
 * @returns {number}        The number of milliseconds after now to the given date
 */
export const toNow = (d: Date, now: () => number = Date.now): number => {
  return now() - d.getTime();
};

export interface ContentTimestamp {
  $date?: { $numberLong: number | string };
}
export interface LegacyTimestamp {
  sec: number | string;
}

/**
 * Returns a new Date constructed from a worldState date object
 * @param {Object} d The worldState date object
 * @returns {Date} parsed date from DE date format
 */
export const parseDate = (
  d?: ContentTimestamp | LegacyTimestamp | number,
): Date => {
  const safeD = d || epochZero;
  const contentD = safeD as ContentTimestamp;
  if (typeof contentD.$date?.$numberLong === "string") {
    return new Date(Number.parseInt(contentD.$date.$numberLong, 10));
  }
  if (typeof contentD.$date?.$numberLong === "number") {
    return new Date(contentD.$date.$numberLong);
  }
  const legacyD = d as unknown as LegacyTimestamp;
  if (typeof legacyD.sec === "string") {
    return new Date(1000 * Number.parseInt(legacyD.sec, 10));
  }
  if (typeof legacyD.sec !== "undefined") {
    return new Date((1000 * legacyD.sec) as number);
  }
  if (typeof d === "number") {
    return new Date(d);
  }
  throw new Error(`Invalid date format ${d}`);
};

/**
 * Get a weekly reset timestamp
 */
export const weeklyReset = (
  nowFunc = () => new Date(),
): { activation: Date; expiry: Date } => {
  const now = nowFunc();
  const currentDay = now.getUTCDay();
  const daysUntilNextMonday = currentDay === 0 ? 1 : 8 - currentDay;

  const expiry = new Date(now.getTime());
  expiry.setUTCDate(now.getUTCDate() + daysUntilNextMonday);
  expiry.setUTCHours(0, 0, 0, 0);

  const activation = new Date(expiry.getTime());
  activation.setUTCDate(expiry.getUTCDate() - 7);

  return { activation, expiry };
};

/**
 * Get a daily reset timestamp
 */
export const dailyReset = (
  nowFunc = () => new Date(),
): { activation: Date; expiry: Date } => {
  const now = nowFunc();

  const activation = new Date(now.getTime());
  activation.setUTCHours(0, 0, 0, 0);

  const expiry = new Date(now.getTime());
  expiry.setUTCDate(now.getUTCDate() + 1);
  expiry.setUTCHours(0, 0, 0, 0);

  return { activation, expiry };
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
  dailyReset,
  weeklyReset,
};
