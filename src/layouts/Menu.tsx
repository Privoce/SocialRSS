import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import avatarIcon from './icons/avatar.png';

export interface MenuItemProps {
  icon: string;
  title: string;
  path: string;
  size: [number, number];
}

const MenuItem: FC<MenuItemProps> = ({ icon, title, path, size }) => {
  const history = useHistory();

  const handleGo = () => {
    history.push(path);
  };

  return (
    <div className="menu-item" onClick={handleGo}>
      <span className="icon">
        <i
          style={{
            backgroundImage: `url(${icon})`,
            width: `${size[0]}px`,
            height: `${size[1]}px`,
          }}
        />
      </span>
      <span>{title}</span>
    </div>
  );
};

export interface FollowItemProps {
  title: string;
  dataSource: any[];
}

const FollowItem: FC<FollowItemProps> = ({ title, dataSource }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="follow-item">
      <div
        className={clsx('name', { open: isOpen })}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <ul className={clsx({ open: isOpen })}>
        {dataSource.map((item, idx) => {
          return (
            <li key={+idx} className="follow-sub-item">
              <i
                style={{ backgroundImage: `url(${item.icon || avatarIcon})` }}
              />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { MenuItem, FollowItem };
