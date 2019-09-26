
export const replaceNames = (content: string, names: string[]) => {
  return content.replace(/#names#/g, names.join(`' | '`));
};

export const replaceSize = (content: string, size: number) => {
  return content.replace(/#size#/g, String(size));
};

export const replacePlatform = (content: string, platform: string) => {
  return content.replace(/#platform#/g, platform);
};

export const replaceRNSvg = (content: string) => {
  return content.replace(/('react-native-svg)/, '$1/lib/commonjs');
};
