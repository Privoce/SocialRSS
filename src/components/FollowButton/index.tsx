import React, { FC, useState, useCallback } from 'react';
import clsx from 'clsx';

import './index.scss';

interface FollowButtonProps {
  isFollow?: boolean | undefined;
  onChange?: (status: boolean | undefined) => void;
}

const prefix = 'sr-follow-btn';

const FollowButton: FC<FollowButtonProps> = ({
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
    <div
      className={clsx(prefix, {
        follow: isFollow,
        fill: isFollow !== undefined,
      })}
      onClick={handleFollow}
    >
      {renderTxt()}
    </div>
  );
};

FollowButton.defaultProps = {
  isFollow: undefined,
};

export default FollowButton;
