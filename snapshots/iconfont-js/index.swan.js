/* eslint-disable */

import Taro from '@tarojs/taro';

export const JsIcon = (props) => {
  const { name, size, color } = props;

  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

JsIcon.defaultProps = {
  size: 14,
};

JsIcon.config = {
  usingComponents: {
    iconfont: './swan/swan',
  },
};

export default JsIcon;
