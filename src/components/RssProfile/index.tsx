import React, { FC } from 'react';

import avatarImg from './img/avatar.png';
import './index.scss';

import FollowButton from '@comps/FollowButton';

interface RssProfileProps {
  avatar?: string;
  username: string;
  widget: React.ReactNode;
  describe?: React.ReactNode;
  isFollow?: boolean;
  onChange?: (status: boolean | undefined) => void;
}

const prefix = 'sr-rss-profile';

const RssProfile: FC<RssProfileProps> = ({
  username,
  describe,
  widget,
  isFollow,
  onChange,
  avatar,
}) => {
  return (
    <div className={prefix}>
      <img className={`${prefix}-avatar`} src={avatar} />
      <div className={`${prefix}-info`}>
        <div className="head">
          <span className="username">{username}</span>
          <FollowButton isFollow={isFollow} onChange={onChange} />
        </div>
        <div className="widget">{widget}</div>
        <div className="describe">{describe}</div>
      </div>
    </div>
  );
};

RssProfile.defaultProps = {
  avatar: avatarImg,
};

export default RssProfile;
