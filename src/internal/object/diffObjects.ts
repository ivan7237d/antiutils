import { EqualFunction } from '../types/types';

/**
 * For each key that the two objects do not have equal values for, yields that
 * key along with values that the two objects have for that key (a missing value
 * is represented by `undefined`).
 */
export const diffObjects = function* <T>(
  from: T,
  to: T,
  equalFunction: EqualFunction<T[keyof T]> = (from, to) => from === to,
): Iterable<
  [
    key: keyof T,
    values:
      | [from: T[keyof T], to: T[keyof T]]
      | [from: T[keyof T], to: undefined]
      | [from: undefined, to: T[keyof T]],
  ]
> {
  for (const key in to) {
    if (!(key in from) || !equalFunction(from[key], to[key])) {
      yield [key, [from[key], to[key]]];
    }
  }
  for (const key in from) {
    if (!(key in to)) {
      yield [key, [from[key], undefined]];
    }
  }
};
