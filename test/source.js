// @flow

type Test = {
  +[string]: number | bigint,
  ...
};

export function dummy(args: $ReadOnlyArray<mixed>): string {
  return 'It works!';
}
