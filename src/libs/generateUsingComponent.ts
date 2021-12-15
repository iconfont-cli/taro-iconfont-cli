import path from 'path';
import fs from 'fs';
import { Config } from './getConfig';
import { getTemplate } from './getTemplate';
import {
  replaceIsRpx,
  replaceNames,
  replacePlatform,
  replaceSize,
  replaceRelativePath,
  replaceDesignWidth,
} from './replace';

export const generateUsingComponent = (config: Config, names: string[], platform?: string) => {
  const saveDir = path.resolve(config.save_dir);
  const jsxExtension = config.use_typescript ? '.tsx' : '.js';

  let iconFile: string;

  if (platform) {
    if (fs.existsSync(path.join(__dirname, '../templates/index.' + platform + jsxExtension + '.template'))) {
      iconFile = getTemplate('index.' + platform + jsxExtension);
    } else {
      iconFile = getTemplate(`index.platform${(platform && platform.includes("-vue")) ? "-vue" : ""}` + jsxExtension);
    }
  } else {
    iconFile = getTemplate('index' + jsxExtension);
  }

  iconFile = replaceNames(iconFile, names);
  iconFile = replaceSize(iconFile, config.default_icon_size);

  if (platform === 'h5' && config.use_rpx) {
    let designWidth = config.design_width || 750
    iconFile = replaceDesignWidth(iconFile, designWidth);
  }

  iconFile = replaceIsRpx(iconFile, config.use_rpx);

  if (platform) {
    iconFile = replacePlatform(iconFile, platform);
  }

  if (!platform && !config.use_typescript) {
    let definitionFile = getTemplate('index.d.ts');

    definitionFile = replaceNames(definitionFile, names);
    fs.writeFileSync(path.join(saveDir, 'index.d.ts'), definitionFile);
  }

  // index.config.ts only support commonJs
  let helperFile = getTemplate('helper.js');
  helperFile = replaceRelativePath(helperFile, config.save_dir);
  fs.writeFileSync(path.join(saveDir, 'helper.js'), helperFile);
  fs.writeFileSync(path.join(saveDir, 'helper.d.ts'), getTemplate('helper.d.ts'));

  if (platform && platform.includes("-vue")) {
    platform = platform.replace(/-vue/, "");
    fs.writeFileSync(path.join(saveDir, "shims.d.ts"), getTemplate('shims.d.ts'));
  }

  fs.writeFileSync(path.join(saveDir, 'index' + (platform ? `.${platform}` : '') + jsxExtension), iconFile);
};
