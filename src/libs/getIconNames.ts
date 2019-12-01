import { XmlData } from 'iconfont-parser';
import { Config } from './getConfig';

export const getIconNames = (data: XmlData, config: Config) => {
  const names: string[] = [];

  data.svg.symbol.forEach((item) => {
    const iconId = item.$.id;
    const iconIdAfterTrim = config.trim_icon_prefix
      ? iconId.replace(
        new RegExp(`^${config.trim_icon_prefix}(.+?)$`),
        (_, value) => value.replace(/^[-_]?(.+?)$/, '$1')
      )
      : iconId;

    names.push(iconIdAfterTrim);
  });

  return names;
};
