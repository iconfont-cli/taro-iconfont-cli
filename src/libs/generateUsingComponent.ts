import path from 'path';
import fs from 'fs';
import { Config } from './getConfig';
import { getTemplate } from './getTemplate';
import { replaceNames, replacePlatform, replaceSize } from './replace';
import { TARO_PLATFORM } from './maps';

export const generateUsingComponent = (config: Config, names: string[], platform?: string) => {
  const saveDir = path.resolve(config.save_dir);
  const jsxExtension = config.use_typescript ? '.tsx' : '.js';

  let iconFile: string;

  if (platform) {
    if (fs.existsSync(path.join(__dirname, '../templates/index.' + platform + jsxExtension + '.template'))) {
      iconFile = getTemplate('index.' + platform + jsxExtension);
    } else {
      iconFile = getTemplate('index.platform' + jsxExtension);
    }
  } else {
    iconFile = getTemplate('index' + jsxExtension);
  }

  iconFile = replaceNames(iconFile, names);
  iconFile = replaceSize(iconFile, config.default_icon_size);

  if (platform) {
    iconFile = replacePlatform(iconFile, platform);
  } else if (!config.use_typescript) {
    fs.writeFileSync(
      path.join(saveDir, 'index.d.ts'),
      replaceNames(getTemplate('index.d.ts'), names),
    );
  }

  fs.writeFileSync(path.join(saveDir, 'index' + (platform ? `.${TARO_PLATFORM[platform]}` : '') + jsxExtension), iconFile);
};
