/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';
import Icon from './rn';

const Iconfont = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

Iconfont.defaultProps = {
  size: 14,
};

export default Iconfont;
