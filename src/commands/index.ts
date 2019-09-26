#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import glob from 'glob';
import colors from 'colors';
import mkdirp from 'mkdirp';
import { getConfig } from '../libs/getConfig';
import { fetchXml } from '../libs/fetchXml';
import { PLATFORM_MAP } from '../libs/maps';
import { filterMiniProgramConfig, filterReactNativeConfig } from '../libs/filterConfig';
import { generateUsingComponent } from '../libs/generateUsingComponent';
import { getIconNames } from '../libs/getIconNames';
import { replaceRNSvg } from '../libs/replace';

const miniProgramBasePath = 'node_modules/mini-program-iconfont-cli';
const reactNativeBasePath = 'node_modules/react-native-iconfont-cli';
const miniProgramDir = fs.existsSync(path.join(__dirname, miniProgramBasePath))
  ? path.join(__dirname, miniProgramBasePath)
  : path.resolve(miniProgramBasePath);
const reactNativeDir = fs.existsSync(path.join(__dirname, reactNativeBasePath))
  ? path.join(__dirname, reactNativeBasePath)
  : path.resolve(reactNativeBasePath);

const config = getConfig();

fetchXml(config.symbol_url).then((result) => {
  if (!config.platforms.length) {
    console.warn(`\nPlatform is required.\n`);
    return;
  }

  mkdirp.sync(config.save_dir);
  glob.sync(path.resolve(config.save_dir, '*')).forEach((dirOrFile) => {
    if (fs.statSync(dirOrFile).isDirectory()) {
      glob.sync(path.resolve(dirOrFile, '*')).forEach((file) => fs.unlinkSync(file));
      fs.rmdirSync(dirOrFile);
    } else {
      fs.unlinkSync(dirOrFile);
    }
  });

  const iconNames = getIconNames(result, config);

  generateUsingComponent(config, iconNames);

  config.platforms.forEach((platform) => {
    let execFile = PLATFORM_MAP[platform] as string;

    if (!execFile) {
      console.warn(`\nThe platform ${colors.red(platform)} is not exist.\n`);
      return;
    }

    console.log(`\nCreating icons for platform ${colors.green(platform)}\n`);

    const execMethod = path.basename(execFile);

    if (execFile.indexOf('mini-program-iconfont-cli') >= 0) {
      execFile = execFile.replace(/mini-program-iconfont-cli/, miniProgramDir);
      require(execFile)[execMethod](result, filterMiniProgramConfig(config, platform));
    } else {
      const rnFilePath = path.resolve(config.save_dir, platform, 'RNIcon' + (config.use_typescript ? '.tsx' : '.js'));

      execFile = execFile.replace(/react-native-iconfont-cli/, reactNativeDir);
      require(execFile)[execMethod](result, filterReactNativeConfig(config, platform));
      // FIXME: react-native-svg/lib/commonjs can not be found in taro.
      // However, this package itself specifies a `main` module field that could not be resolved
      // Indeed, none of these files exist
      fs.writeFileSync(
        rnFilePath,
        replaceRNSvg(fs.readFileSync(rnFilePath ).toString())
      );
    }

    generateUsingComponent(config, iconNames, platform);
  });
}).catch((e) => {
  console.error(colors.red(e.message || 'Unknown Error'));
  process.exit(1);
});
