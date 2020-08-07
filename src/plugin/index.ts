import path from 'path';
import { IPluginContext } from '@tarojs/service';
import { getConfig } from '../libs/getConfig';

export default (ctx: IPluginContext, pluginOpts) => {
  const config = getConfig(['--config', pluginOpts.config]);

  const copyFrom = path.resolve(config.save_dir, `${process.env.TARO_ENV}`) + path.sep;
  const relative = path.relative(ctx.paths.sourcePath, copyFrom);
  const copyTo = path.join(ctx.paths.outputPath, relative);

  ctx.initialConfig.copy = ctx.initialConfig.copy || {
    patterns: [],
    options: {},
  };

  ctx.initialConfig.copy.patterns.push({
    from: copyFrom,
    to: copyTo,
  });

  process.env.ICONFONT_DESIGN_WIDTH = (ctx.initialConfig.designWidth || 750).toString();
}
