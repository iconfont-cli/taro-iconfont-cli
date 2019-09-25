/* eslint-disable */
import { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export = IconFont;
