/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';
import Icon from './rn';

const IconFont = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
