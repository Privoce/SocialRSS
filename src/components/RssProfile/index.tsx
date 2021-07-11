import React, { FC } from 'react';

import './index.scss';

interface RssProfileProps {
  avatar: string;
  username: string;
  widget: React.ReactNode;
  describe?: React.ReactNode;
}

const prefix = 'sr-rss-profile';

const RssProfile: FC<RssProfileProps> = () => {
  return (
    <div className={prefix}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default RssProfile;
