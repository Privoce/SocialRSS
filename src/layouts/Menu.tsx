import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import avatarIcon from './icons/avatar.png';

export interface MenuItemProps {
  icon: React.ReactNode | string;
  title: string;
  path: string;
  isActive?: boolean;
}

const MenuItem: FC<MenuItemProps> = ({ icon, title, path, isActive }) => {
  const history = useHistory();

  const handleGo = () => {
    history.push(path);
  };

  return (
    <div className={clsx('menu-item', { on: isActive })} onClick={handleGo}>
      <span className="icon">
        <i>{icon}</i>
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
      {dataSource.length > 0 && isOpen && (
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
      )}
    </div>
  );
};

export { MenuItem, FollowItem };
