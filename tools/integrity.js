/**
 * @description Insist that the provided data has the required properties.
 * @param {Object} thing to encourage to have data
 * @param {string[]} args arguments to ensure
 */
/* eslint-disable-line import/prefer-default-export */ export const insist = (thing, ...args) => {
  if (!thing || !Object.keys(thing).length) {
    throw new TypeError(`The provided data does not have the required properties.`);
  }
  args.forEach((arg) => {
    if (!thing[arg]) {
      throw new TypeError(`The provided data does not have the required properties.`);
    }
  });
};
