import path from 'path';
import fs from 'fs';
import camelCase from 'camelcase';
import decamelize from 'decamelize';
import { Config } from './getConfig';
import { getTemplate } from './getTemplate';
import {
  replaceIsRpx,
  replaceNames,
  replacePlatform,
  replaceSize,
  replaceRelativePath,
  replaceDesignWidth,
  replaceComponentName,
  replaceComponentNameCamelCase
} from './replace';

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

  iconFile = replaceComponentName(iconFile, decamelize(config.component_name, { separator: '-' }));
  iconFile = replaceComponentNameCamelCase(iconFile, camelCase(config.component_name, { pascalCase: true }));
  iconFile = replaceNames(iconFile, names);
  iconFile = replaceSize(iconFile, config.default_icon_size);

  if(platform === 'h5' && config.use_rpx) {
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
    definitionFile = replaceComponentName(definitionFile, decamelize(config.component_name, { separator: '-' }));
    definitionFile = replaceComponentNameCamelCase(definitionFile, camelCase(config.component_name, { pascalCase: true }));
    fs.writeFileSync(path.join(saveDir, 'index.d.ts'), definitionFile);
  }

  // index.config.ts only support commonJs
  let helperFile = getTemplate('helper.js');
  helperFile = replaceRelativePath(helperFile, config.save_dir);
  helperFile = replaceComponentName(helperFile, decamelize(config.component_name, { separator: '-' }));
  helperFile = replaceComponentNameCamelCase(helperFile, camelCase(config.component_name, { pascalCase: true }));
  fs.writeFileSync(path.join(saveDir, 'helper.js'), helperFile);

  let helpDFile = getTemplate('helper.d.ts');
  helpDFile = replaceComponentName(helpDFile, decamelize(config.component_name, { separator: '-' }));
  helpDFile = replaceComponentNameCamelCase(helpDFile, camelCase(config.component_name, { pascalCase: true }));

  fs.writeFileSync(path.join(saveDir, 'helper.d.ts'), helpDFile);

  fs.writeFileSync(path.join(saveDir, 'index' + (platform ? `.${platform}` : '') + jsxExtension), iconFile);
};
