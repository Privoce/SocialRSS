import React, { FC } from 'react';

import avatarImg from './img/avatar.png';
import './index.scss';

import FollowButton from '@comps/FollowButton';

interface RssProfileProps {
  avatar?: string;
  username: string;
  tags: Array<string>;
  describe?: React.ReactNode;
  isFollow?: boolean;
  userID?: string;
  onChange?: (status: boolean | undefined) => void;
}

const prefix = 'sr-rss-profile';

const RssProfile: FC<RssProfileProps> = ({
  username,
  describe,
  tags,
  isFollow,
  onChange,
  avatar,
  userID,
}) => {
  const renderTags = () => {
    return tags.map((i) => {
      return (
        <span className="tag" key={i}>
          #{i}
        </span>
      );
    });
  };

  return (
    <div className={prefix}>
      <img className={`${prefix}-avatar`} src={avatar} />
      <div className={`${prefix}-info`}>
        <div className="head">
          <span className="username">{username}</span>
          <FollowButton isFollow={isFollow} onChange={onChange} />
        </div>
        <div className="id">ID: {userID}</div>
        <div className="tags">{renderTags()}</div>
        <div className="describe">{describe}</div>
      </div>
    </div>
  );
};

RssProfile.defaultProps = {
  avatar: avatarImg,
};

export default RssProfile;
