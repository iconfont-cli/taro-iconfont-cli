/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';


interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={size} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 20,
};

export default IconFont;
