import { memoizeStrong } from './memoizeStrong';
import { memoizeWeak } from './memoizeWeak';
import { teach } from './teach';

it('works', () => {
  const a = [0] as const;
  const callback = jest.fn();
  const decorated1 = memoizeWeak(callback);
  teach(decorated1, a, 0);
  expect(decorated1(a)).toEqual(0);
  expect(callback.mock.calls).toMatchInlineSnapshot(`Array []`);
  const decorated2 = memoizeStrong(callback);
  teach(decorated2, a, 0);
  expect(decorated2(a)).toEqual(0);
  expect(callback.mock.calls).toMatchInlineSnapshot(`Array []`);
  teach(decorated2, a, 1);
  expect(decorated2(a)).toEqual(0);
  expect(callback.mock.calls).toMatchInlineSnapshot(`Array []`);
  expect(() => teach(() => 0, 0, 0)).toThrowErrorMatchingInlineSnapshot(
    `"teach() must be called with a function returned by memoizeWeak() or memoizeStrong()."`,
  );
});
