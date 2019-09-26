import { Config } from './getConfig';
import path from 'path';

export const filterMiniProgramConfig = (config: Config, platform: string) => {
  return {
    symbol_url: config.symbol_url,
    save_dir: path.join(config.save_dir, platform),
    use_rpx: config.use_rpx,
    trim_icon_prefix: config.trim_icon_prefix,
    default_icon_size: config.default_icon_size,
  };
};

export const filterReactNativeConfig = (config: Config, platform: string) => {
  return {
    symbol_url: config.symbol_url,
    use_typescript: config.use_typescript,
    save_dir: path.join(config.save_dir, platform),
    generate_mode: 'all-in-one',
    trim_icon_prefix: config.trim_icon_prefix,
    default_icon_size: config.default_icon_size,
    summary_component_name: 'RNIcon',
  };
};

export const filterReactWebConfig = (config: Config, platform: string) => {
  return {
    symbol_url: config.symbol_url,
    use_typescript: config.use_typescript,
    save_dir: path.join(config.save_dir, platform),
    generate_mode: 'all-in-one',
    trim_icon_prefix: config.trim_icon_prefix,
    default_icon_size: config.default_icon_size,
    summary_component_name: 'H5Icon',
  };
};
