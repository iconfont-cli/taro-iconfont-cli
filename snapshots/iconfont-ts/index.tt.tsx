/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

export const TsxIcon: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={size} color={color} />;
};

TsxIcon.defaultProps = {
  size: 20,
};

TsxIcon.config = {
  usingComponents: {
    iconfont: './tt/tt',
  },
};

export default TsxIcon;
