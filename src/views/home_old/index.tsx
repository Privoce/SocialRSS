import React, { useState } from 'react';
import Drawer from 'rc-drawer';

import { IFeedsItem } from '@/api';
import { useTwitterUser } from '@hooks/useAPI';
import { fmtDate } from '@utils/tools';
import Detail from '../detail';

import './index.scss';

const drawerWdith = document.body.clientWidth < 640 ? '100%' : '70%';

export default function HomeView() {
  const [isOpen, setOpen] = useState(false);
  const [detail, setDetail] = useState<IFeedsItem | null>(null);
  const { data, loading } = useTwitterUser('DIYgod');

  if (loading) return <div>loading...</div>;

  const handleDetail = (data: IFeedsItem) => {
    setDetail(data);
    setOpen(true);
  };

  const handleClose = () => {
    setDetail(null);
    setOpen(false);
  };

  return (
    <div className="home-view">
      <Drawer
        placement="right"
        open={isOpen}
        onClose={handleClose}
        width={drawerWdith}
      >
        {detail && (
          <>
            <i className="drawer-close" onClick={handleClose} />
            <Detail dataSource={detail} />
          </>
        )}
      </Drawer>
      <div className="head">
        <img className="avatar" src={data?.image?.url} />
        <a href={data?.image?.link}>{data?.title}</a>
        <p>{data?.description}</p>
      </div>
      {data?.items?.map((item) => {
        return (
          <div
            key={item.guid}
            className="rss-item"
            onClick={() => handleDetail(item)}
          >
            <div className="item-title">{item.title}</div>
            <div className="info">
              {item.author} / {item.isoDate && fmtDate(item.isoDate)}
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: item.contentSnippet }}
            />
          </div>
        );
      })}
    </div>
  );
}
