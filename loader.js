import { isBuiltin } from 'node:module';

import flowRemoveTypes from 'flow-remove-types';

export async function load(url, context, defaultLoad) {
  if (!shouldTransform(url)) {
    return defaultLoad(url, context, defaultLoad);
  }

  const { source, format } = await defaultLoad(url, context, defaultLoad);

  const transformed = flowRemoveTypes(source.toString(), { all: true });

  return {
    source: transformed.toString(),
    format,
  };
}

function shouldTransform(url) {
  return !isBuiltin(url) && !/node_modules/.test(url);
}
