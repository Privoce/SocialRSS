import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import HomeIcon from '@comps/icon/HomeIcon';
import ArchivedIcon from '@comps/icon/ArchivedIcon';

import settingIcon from './icons/setting.svg';
import { MenuItem, MenuItemProps, FollowItem } from './Menu';

const menuConfig = (): MenuItemProps[] => [
  { icon: 'home', title: 'My Page', path: '/' },
  { icon: 'archived', title: 'Archived', path: '/archived' },
];

export default function SideMenu() {
  const history = useHistory();
  const location = useLocation();

  const handleGo = () => {
    history.push('/subscription');
  };

  return (
    <div className="side-nav">
      {menuConfig().map((item) => {
        const isActive = location.pathname === item.path;
        const fill = isActive ? 'var(--blue)' : '#828282';
        return (
          <MenuItem
            key={item.title}
            isActive={isActive}
            {...item}
            icon={
              {
                home: <HomeIcon fill={fill} />,
                archived: <ArchivedIcon fill={fill} />,
              }[item.icon as string]
            }
          />
        );
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
          type="people"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
        <FollowItem
          title="Websites"
          type="websites"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
        <FollowItem
          title="Newsletters"
          type="newsletters"
          dataSource={[
            { icon: '', name: 'John Cage' },
            { icon: '', name: 'John Cage' },
          ]}
        />
      </div>
    </div>
  );
}
