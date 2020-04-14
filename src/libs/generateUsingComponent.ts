import path from 'path';
import fs from 'fs';
import { Config } from './getConfig';
import { getTemplate } from './getTemplate';
import { replaceIsRpx, replaceNames, replacePlatform, replaceSize } from './replace';

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
  iconFile = replaceIsRpx(iconFile, config.use_rpx);

  if (platform) {
    iconFile = replacePlatform(iconFile, platform);
  }

  if (!platform && !config.use_typescript) {
    let definitionFile = getTemplate('index.d.ts');

    definitionFile = replaceNames(definitionFile, names);
    fs.writeFileSync(path.join(saveDir, 'index.d.ts'), definitionFile);
  }

  fs.writeFileSync(path.join(saveDir, 'index' + (platform ? `.${platform}` : '') + jsxExtension), iconFile);
};
