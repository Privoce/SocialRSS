import React, { FC, useState } from 'react';

import Modal from '@comps/Modal';
import BookmarkIcon from '@comps/icon/BookmarkIcon';
import LikeIcon from '@comps/icon/LikeIcon';

import './index.scss';

interface RssDetailProps {
  dataSorce: any;
  onClose?: () => void;
  onSave?: () => void;
  onLike?: () => void;
}

const RssDetail: FC<RssDetailProps> = ({
  dataSorce,
  onClose,
  onSave,
  onLike,
}) => {
  const [isSave, setSave] = useState(false);
  const [isLike, setLike] = useState(false);

  const handleSave = () => {
    onSave && onSave();
    setSave(!isSave);
  };

  const handleLike = () => {
    onLike && onLike();
    setLike(!isLike);
  };

  const handleLink = () => {
    window.open(dataSorce.link);
  };

  return (
    dataSorce && (
      <Modal open onClose={onClose} className="detail-modal">
        <div className="actions">
          <div>
            <i className="save" onClick={handleSave}>
              <BookmarkIcon fill={isSave ? 'var(--blue)' : '#828282'} />
            </i>
            <i className="like" onClick={handleLike}>
              <LikeIcon fill={isLike ? 'var(--blue)' : '#828282'} />
            </i>
          </div>
          <div>
            <span className="read-source" onClick={handleLink}>
              Read Source
            </span>
          </div>
        </div>
        <div className="post">
          <div>
            <h3>{dataSorce.title}</h3>
            <pre>{JSON.stringify(dataSorce, null, 2)}</pre>
            <div dangerouslySetInnerHTML={{ __html: dataSorce.content }} />
          </div>
        </div>
      </Modal>
    )
  );
};

export default RssDetail;
