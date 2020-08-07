/* eslint-disable */

import React from 'react';
import Taro from '@tarojs/taro';
import Icon from './h5';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size, 750))} color={color} />;
};

IconFont.defaultProps = {
  size: 14,
};

export default IconFont;
