import path from 'path';

export const getComponentPath = (saveDir: string) => {
  return path.relative(path.resolve('src', 'pages', 'index'), path.resolve(saveDir));
};
