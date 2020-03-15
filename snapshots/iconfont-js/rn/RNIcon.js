/* eslint-disable */


import IconAlipay from './IconAlipay';
import IconUser from './IconUser';
import IconSetup from './IconSetup';

export const RNIcon = ({ name, ...rest }) => {
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

export default RNIcon;
