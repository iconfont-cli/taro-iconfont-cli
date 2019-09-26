/* eslint-disable */

import Taro from '@tarojs/taro';
import Icon from './rn/H5Icon';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
