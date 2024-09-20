# node-loader-flow

[![npm version][npm-image]][npm-url]
[![CI Status][ci-image]][ci-url]

> A Node.js loader for Flow.
> Strip Flow types with [flow-remove-types] before Node execution.

## Installation

```
npm install node-loader-flow --save-dev
# or
pnpm add node-loader-flow --save-dev
# or
yarn add node-loader-flow --dev
```

## Usage

Using the module hook:
```bash
node --import node-loader-flow/register file.js
```
Using the module loader (deprecated):
```bash
node --loader node-loader-flow file.js
```
Using Node test runner:
```bash
node --import node-loader-flow/register --test
```

## Credits

- [Pascal Duez](https://github.com/pascalduez)

## Licence

node-loader-flow is [unlicensed](http://unlicense.org/).

[npm-url]: https://www.npmjs.org/package/node-loader-flow
[npm-image]: http://img.shields.io/npm/v/node-loader-flow.svg?style=flat-square
[ci-url]: https://github.com/pascalduez/node-loader-flow/actions/workflows/ci.yml
[ci-image]:  https://img.shields.io/github/actions/workflow/status/pascalduez/node-loader-flow/ci.yml?branch=main&style=flat-square

[flow-remove-types]: https://www.npmjs.com/package/flow-remove-types

