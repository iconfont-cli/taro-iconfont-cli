/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';
import Icon from './rn/RNIcon';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 20,
};

export default IconFont;
