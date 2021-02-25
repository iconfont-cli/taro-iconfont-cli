/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';


export type IconNames = 'alipay' | 'user' | 'setup';

interface Props {
  name: IconNames;
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
