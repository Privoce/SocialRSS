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
  reactions: Array<{
    name: string;
    avatar: string;
    id: string;
  }>;
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

  const renderReactions = () => {
    if (reactions.length <= 2) {
      return reactions.map((i) => i.name).join(' and ');
    }
    if (reactions.length === 3) {
      return reactions
        .map((i, idx) => {
          if (idx === 0) return `${i.name}, `;
          if (idx === 1) return `${i.name} and `;
          return i.name;
        })
        .join('');
    }
    if (reactions.length > 3) {
      return reactions
        .map((i, idx) => {
          if (idx === 0) return `${i.name}, `;
          if (idx === 1) return `${i.name} and `;
          if (idx === 2) return `${reactions.length - 2} others`;
        })
        .join('');
    }
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
            <span className="txt2">{renderReactions()}</span>
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
