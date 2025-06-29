/**
 * @description Insist that the provided data has the required properties.
 * @param thing to encourage to have data
 * @param args arguments to ensure
 */
export const insist = (thing: Record<string, any>, args: string[]) => {
  if (!thing || !Object.keys(thing).length) {
    throw new TypeError('The provided data does not have the required properties.');
  }
  args.forEach((arg) => {
    if (!thing[arg]) {
      throw new TypeError('The provided data does not have the required properties.');
    }
  });
};
