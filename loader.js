import path from 'node:path';
import { isBuiltin } from 'node:module';

import flowRemoveTypes from 'flow-remove-types';

export async function load(url, context, nextLoad) {
  if (!shouldTransform(url)) {
    return nextLoad(url, context);
  }

  let transformed;
  let { source, format } = await nextLoad(url, context);

  try {
    transformed = flowRemoveTypes(source.toString(), { all: true });
  } catch (ex) {
    ex.message = `${ex.message}\n${url}:${ex.loc.line}\n`;
    console.error(ex.stack);
  }

  return {
    format,
    shortCircuit: true,
    source: transformed?.toString() || source,
  };
}

let allowed = ['.js', '.mjs', '.cjs', '.jsx', '.flow'];

function shouldTransform(url) {
  return (
    !isBuiltin(url) &&
    !/node_modules/.test(url) &&
    allowed.includes(path.extname(url))
  );
}
