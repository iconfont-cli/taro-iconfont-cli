/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'alipay' | 'user' | 'setup';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const Iconfont: FunctionComponent<IconProps> = () => {
  return null;
};

export default Iconfont;
