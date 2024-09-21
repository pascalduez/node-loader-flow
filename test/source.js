// @flow

type Test = {
  +[string]: number | bigint,
  ...
};

// https://github.com/facebook/hermes/issues/1458
// import styles from './module.css' with { type: 'css' };

export function dummy(args: $ReadOnlyArray<mixed>): string {
  return 'It works!';
}
