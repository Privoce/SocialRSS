import React, { FC } from 'react';
import clsx from 'clsx';

import rssImg from './img/default.png';
import './index.scss';

interface RssItemProps {
  className?: string;
  img?: string;
  title: React.ReactNode;
  widget: React.ReactNode;
  content: React.ReactNode;
  reactions: React.ReactNode;
  onLike?: () => void;
  onSave?: () => void;
}

const prefix = 'sr-rss-item';

const RssItem: FC<RssItemProps> = ({
  className,
  img,
  title,
  widget,
  content,
  reactions,
  onSave,
  onLike,
}) => {
  const handleSave = () => {
    onSave && onSave();
  };
  const handleLike = () => {
    onLike && onLike();
  };

  return (
    <div className={clsx(prefix, className)}>
      <div className={`${prefix}-img`}>
        <img src={img} alt="RSS Thumbnail" />
      </div>
      <div>
        <h3>{title}</h3>
        <div className={`${prefix}-widget`}>{widget}</div>
        <div className={`${prefix}-content`}>{content}</div>
        <div className={`${prefix}-reactions`}>
          <div className="txt">
            <span className="txt1">Recommended by </span>
            <span className="txt2">{reactions}</span>
          </div>
          <div className={`${prefix}-actions`}>
            <i className="save" onClick={handleSave} />
            <i className="like" onClick={handleLike} />
          </div>
        </div>
      </div>
    </div>
  );
};

RssItem.defaultProps = {
  img: rssImg,
};

export default RssItem;
