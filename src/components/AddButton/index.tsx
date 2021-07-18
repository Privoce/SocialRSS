import React, { FC } from 'react';

import './index.scss';

interface AddButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const prefix = 'sr-add-button';

const AddButton: FC<AddButtonProps> = ({ children, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={prefix} onClick={handleClick}>
      {children}
    </div>
  );
};

export default AddButton;
