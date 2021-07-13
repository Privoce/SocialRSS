import React from 'react';
import { useHistory } from 'react-router-dom';

import homeIcon from './icons/home.svg';
import archivedIcon from './icons/archived.svg';
import settingIcon from './icons/setting.svg';
import { MenuItem, MenuItemProps, FollowItem } from './Menu';

const menuConfig: MenuItemProps[] = [
  { icon: homeIcon, title: 'My Page', path: '/', size: [26, 26] },
  { icon: archivedIcon, title: 'Archived', path: 'archived', size: [18, 24] },
];

export default function SideMenu() {
  const history = useHistory();

  const handleGo = () => {
    history.push('/subscription');
  };

  return (
    <div className="side-nav">
      {menuConfig.map((item) => {
        return <MenuItem key={item.title} {...item} />;
      })}
      <div>
        <div className="following">
          <span>FOLLOWING</span>
          <i
            onClick={handleGo}
            style={{ backgroundImage: `url(${settingIcon})` }}
          />
        </div>
        <FollowItem
          title="People"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
        <FollowItem
          title="Sources"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
        <FollowItem
          title="Newsletters"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
      </div>
    </div>
  );
}
