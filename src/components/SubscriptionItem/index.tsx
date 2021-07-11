import React, { FC } from 'react';

import FollowButton from '@comps/FollowButton';
import avatarIcon from './img/avatar.png';
import './index.scss';

interface SubscriptionItemProps {
  title: React.ReactNode;
  icon?: string;
  // 'follow' | 'following' | 'unfollow'
  isFollow?: boolean | undefined;
  onChange?: (status: boolean | undefined) => void;
}

const prefix = 'sr-subscription-item';

const SubscriptionItem: FC<SubscriptionItemProps> = ({
  icon,
  title,
  onChange,
  isFollow,
}) => {
  return (
    <div className={prefix}>
      <div>
        <div className={`${prefix}-info`}>
          <i style={{ backgroundImage: `url(${icon})` }} />
          <span className="title">{title}</span>
        </div>
        <FollowButton isFollow={isFollow} onChange={onChange} />
      </div>
    </div>
  );
};

SubscriptionItem.defaultProps = {
  icon: avatarIcon,
  isFollow: undefined,
};

export default SubscriptionItem;
