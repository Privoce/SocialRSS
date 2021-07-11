import React, { FC, useState, useCallback } from 'react';
import clsx from 'clsx';

import './index.scss';
import avatarIcon from './img/avatar.png';

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
  isFollow: _isFollow,
}) => {
  const [isFollow, setFollow] = useState<boolean | undefined>(_isFollow);

  const handleFollow = () => {
    setFollow(!isFollow);
    onChange && onChange(!isFollow);
  };

  const renderTxt = useCallback(() => {
    if (isFollow === undefined) return 'Follow';
    return isFollow ? 'Following' : 'Unfollow';
  }, [isFollow]);

  return (
    <div className={prefix}>
      <div>
        <div className={`${prefix}-info`}>
          <i style={{ backgroundImage: `url(${icon})` }} />
          <span className="title">{title}</span>
        </div>
        <div
          className={clsx('actions', {
            follow: isFollow,
            fill: isFollow !== undefined,
          })}
          onClick={handleFollow}
        >
          {renderTxt()}
        </div>
      </div>
    </div>
  );
};

SubscriptionItem.defaultProps = {
  icon: avatarIcon,
  isFollow: undefined,
};

export default SubscriptionItem;
