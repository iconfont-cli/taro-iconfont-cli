/* eslint-disable */

import Taro from '@tarojs/taro';

const IconFont = (props) => {
  const { name, size, color } = props;

  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 14,
};

IconFont.config = {
  usingComponents: {
    iconfont: './weapp/weapp',
  },
};

export default IconFont;
