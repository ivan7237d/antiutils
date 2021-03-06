import { pipe } from '../pipe';
import { objectEntries } from './objectEntries';

it('works', () => {
  expect([...pipe({ a: 0, b: 1 }, objectEntries)]).toMatchInlineSnapshot(`
    Array [
      Array [
        "a",
        0,
      ],
      Array [
        "b",
        1,
      ],
    ]
  `);

  const symbol = Symbol();
  const entries = [...pipe({ a: 1 as const, [symbol]: 2 }, objectEntries)];
  expect(entries).toMatchInlineSnapshot(`
    Array [
      Array [
        "a",
        1,
      ],
    ]
  `);
});
