import path from 'path';

export const replaceNames = (content: string, names: string[]) => {
  return content.replace(/#names#/g, names.join(`' | '`));
};

export const replaceSize = (content: string, size: number) => {
  return content.replace(/#size#/g, String(size));
};

export const replacePlatform = (content: string, platform: string) => {
  return content.replace(/#platform#/g, platform);
};

export const replaceIsRpx = (content: string, useRpx: boolean) => {
  return content
    .replace(/#rpx-1:(.+?):#/g, useRpx ? '$1' : '')
    .replace(/#rpx-0:(.+?):#/g, useRpx ? '' : '$1');
};

export const replaceDesignWidth = (content: string, designWidth) => {
  return content
    .replace(/#designWidth#/g, designWidth)
};

export const replaceRelativePath = (content: string, saveDir: string) => {
  const relativePath = path
    .relative(path.resolve('src'), path.resolve(saveDir))
    // To resolve the path separator on windows
    .replace('\\', '/');
  return content.replace(/#relativePath#/g, relativePath);
};

export const replaceComponentName = (content: string, componentName: string) => {
  return content.replace(/#component-name#/g, componentName);
};

export const replaceComponentNameCamelCase = (content: string, componentName: string) => {
  return content.replace(/#ComponentName#/g, componentName);
};
