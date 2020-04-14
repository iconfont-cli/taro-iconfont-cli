/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

export const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 20,
};

IconFont.config = {
  usingComponents: {
    iconfont: './weapp/weapp',
  },
};

export default IconFont;
