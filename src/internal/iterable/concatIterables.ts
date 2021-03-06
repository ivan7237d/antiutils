export const concatIterables = function* <T extends unknown[]>(
  ...iterables: { [Key in keyof T]: Iterable<T[Key]> }
): IterableIterator<T[number]> {
  for (const iterable of iterables) {
    for (const value of iterable) {
      yield value;
    }
  }
};
