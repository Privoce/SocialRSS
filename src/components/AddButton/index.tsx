import React, { FC } from 'react';

import './index.scss';

interface AddButtonProps {
  children: React.ReactNode;
}

const prefix = 'sr-add-button';

const AddButton: FC<AddButtonProps> = ({ children }) => {
  return <div className={prefix}>{children}</div>;
};

export default AddButton;
