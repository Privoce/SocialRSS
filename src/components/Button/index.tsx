import React, { FC } from 'react';
import clsx from 'clsx';

import './index.scss';

interface ButtonProps {
  children: React.ReactNode;
  theme?: 'blue' | 'gray';
}

const prefix = 'sr-button';

const Button: FC<ButtonProps> = ({ children, theme }) => {
  return <div className={clsx(prefix, `${prefix}-${theme}`)}>{children}</div>;
};

Button.defaultProps = {
  theme: 'gray',
};

export default Button;
