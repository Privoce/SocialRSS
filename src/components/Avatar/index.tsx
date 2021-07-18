import React, { FC } from 'react';

import './index.scss';

interface AddButtonProps {
  name: string;
  avatar?: string;
  unread?: boolean;
  onClick?: () => void;
}

const prefix = 'sr-avatar';

const AddButton: FC<AddButtonProps> = ({ name, avatar, onClick, unread }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const getName = () => {
    return name.substring(0, 1).toUpperCase();
  };

  return (
    <div className={prefix} onClick={handleClick}>
      <div className="avatar">
        <i className="unread" />
        {!avatar ? (
          <>{getName()}</>
        ) : (
          <i style={{ backgroundImage: `url(${avatar})` }} />
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};

export default AddButton;
