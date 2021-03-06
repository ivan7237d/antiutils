/**
 * Returns the first value, or `undefined` if the iterable is empty.
 */
export const firstInIterable = <T>(iterable: Iterable<T>): T | undefined => {
  for (const el of iterable) {
    return el;
  }
};
