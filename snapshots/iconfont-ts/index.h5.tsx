/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';
import Icon from './h5';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

export const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 20,
};

export default IconFont;
