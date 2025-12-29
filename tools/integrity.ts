/**
 * @description Insist that the provided data has the required properties.
 * @param {Record<string, unknown>} thing to encourage to have data
 * @param {...string} args arguments to ensure
 */
export const insist = (thing: Record<string, unknown>, ...args: string[]) => {
  if (!thing || !Object.keys(thing).length) {
    throw new TypeError("No data provided.");
  }

  args.forEach((arg) => {
    if (!(arg in thing)) {
      throw new TypeError(`Missing required property: '${arg}'.`);
    }
  });
};
