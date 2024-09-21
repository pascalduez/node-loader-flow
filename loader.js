import { isBuiltin } from 'node:module';

import flowRemoveTypes from 'flow-remove-types';

export async function load(url, context, defaultLoad) {
  if (!shouldTransform(url)) {
    return defaultLoad(url, context, defaultLoad);
  }

  let transformed;
  let { source, format } = await defaultLoad(url, context, defaultLoad);

  try {
    transformed = flowRemoveTypes(source.toString(), { all: true });
  } catch (ex) {
    ex.message = `${ex.message}\n${url}:${ex.loc.line}\n`;
    console.error(ex.stack);
  }

  return {
    source: transformed?.toString() || source,
    format,
  };
}

function shouldTransform(url) {
  return !isBuiltin(url) && !/node_modules/.test(url);
}
