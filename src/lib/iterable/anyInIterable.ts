/**
 * Note: returns `false` for an empty iterable.
 */
export const anyInIterable = (source: Iterable<boolean>): boolean => {
  for (const value of source) {
    if (value) {
      return true;
    }
  }
  return false;
};