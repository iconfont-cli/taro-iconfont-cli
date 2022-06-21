import path from 'path';
import fs from 'fs';
import colors from 'colors';
import minimist from 'minimist';
import defaultConfig from './iconfont.json';
import { PLATFORM_MAP } from './maps';

export interface Config {
  symbol_url: string;
  save_dir: string;
  use_typescript: boolean;
  platforms: string[];
  use_rpx: boolean;
  design_width: string | number;
  trim_icon_prefix: string;
  default_icon_size: number;
  local_svgs?: string;
}

let cacheConfig: Config;

export const getConfig = (argv?: string[]) => {
  if (cacheConfig) {
    return cacheConfig;
  }

  const args = minimist<{ config: string }>(argv || process.argv.slice(2));
  let configFilePath = 'iconfont.json';

  if (args.config && typeof args.config === 'string') {
    configFilePath = args.config;
  }

  const targetFile = path.resolve(configFilePath);

  if (!fs.existsSync(targetFile)) {
    console.warn(colors.red(`File "${configFilePath}" doesn't exist, did you forget to generate it?`));
    process.exit(1);
  }

  const config = require(targetFile) as Config;

  if ((!config.symbol_url || !/^(https?:)?\/\//.test(config.symbol_url)) && !config.local_svgs) {
    console.warn(colors.red('You are required to provide symbol_url or local_svgs'));
    process.exit(1);
  }

  if (config.symbol_url.indexOf('//') === 0) {
    config.symbol_url = 'http:' + config.symbol_url;
  }

  if (Array.isArray(config.platforms)) {
    config.platforms = [...new Set(config.platforms)];
  } else {
    if (config.platforms === '*') {
      config.platforms = Object.keys(PLATFORM_MAP);
    } else {
      config.platforms = [];
    }
  }

  config.save_dir = config.save_dir || defaultConfig.save_dir;
  config.default_icon_size = config.default_icon_size || defaultConfig.default_icon_size;

  cacheConfig = config;

  return config;
};
