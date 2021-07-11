import React, { FC } from 'react';

import homeIcon from './icons/home.svg';
import archivedIcon from './icons/archived.svg';
import settingIcon from './icons/setting.svg';
import arrowIcon from './icons/arrow.svg';

interface MenuItemProps {
  icon: string;
  title: string;
  size: [number, number];
}

const MenuItem: FC<MenuItemProps> = ({ icon, title, size }) => {
  return (
    <div className="menu-item">
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

const menuConfig: MenuItemProps[] = [
  { icon: homeIcon, title: 'My Page', size: [26, 26] },
  { icon: archivedIcon, title: 'Archived', size: [18, 24] },
];

export default function SideMenu() {
  return (
    <div className="side-nav">
      {menuConfig.map((item) => {
        return <MenuItem key={item.title} {...item} />;
      })}
      <div></div>
    </div>
  );
}
