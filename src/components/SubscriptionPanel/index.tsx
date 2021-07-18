import React, { FC, useState, useEffect } from 'react';
import clsx from 'clsx';

import useQuery from '@hooks/useQuery';

import arrowIcon from './icon/arrow.svg';

import './index.scss';

interface SubscriptionPanelProps {
  title: React.ReactNode;
  type?: string;
  children: React.ReactNode;
}

const SubscriptionPanel: FC<SubscriptionPanelProps> = ({
  title,
  type,
  children,
}) => {
  const query = useQuery();
  const [isFold, setFold] = useState(true);

  useEffect(() => {
    setFold(query.get('type') !== type);
  }, [query.get('type')]);

  return (
    <div className={clsx('sr-subscription-panel', { fold: isFold })}>
      <div className="subscription-title" onClick={() => setFold(!isFold)}>
        <span>{title}</span>
        <img src={arrowIcon} alt="" />
      </div>
      <div className="subscription-list">{children}</div>
    </div>
  );
};

export default SubscriptionPanel;
