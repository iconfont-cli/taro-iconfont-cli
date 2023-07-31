/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

const Iconfont = (props) => {
  const { name, size, color, style } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 720))} color={color} style={style} />;
};

Iconfont.defaultProps = {
  size: 14,
};

export default Iconfont;
