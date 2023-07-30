import { lazy } from 'react';

export const multiLazy = moduleLoaderArray => {
  const promises = Promise.all(moduleLoaderArray.map(loader => loader()));
  return moduleLoaderArray.map((m, index) =>
    lazy(() => promises.then(results => results[index]))
  );
}