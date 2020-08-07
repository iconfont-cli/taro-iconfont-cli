/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import IconAlipay from './IconAlipay';
import IconUser from './IconUser';
import IconSetup from './IconSetup';

export type IconNames = 'alipay' | 'user' | 'setup';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'alipay':
      return <IconAlipay {...rest} />;
    case 'user':
      return <IconUser {...rest} />;
    case 'setup':
      return <IconSetup {...rest} />;

  }

  return null;
};

export default IconFont;
