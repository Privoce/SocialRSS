import React from 'react';

import { useTwitterUser } from '@hooks/useAPI';
import { fmtDate } from '@utils/tools';

import './index.scss';

export default function HomeView() {
  const { data, loading } = useTwitterUser('DIYgod');

  if (loading) return <div>loading...</div>;

  return (
    <div className="home-view">
      <div className="head">
        <img className="avatar" src={data?.image?.url} />
        <a href={data?.image?.link}>{data?.title}</a>
        <p>{data?.description}</p>
      </div>
      {data?.items?.map((item) => {
        return (
          <div key={item.guid} className="rss-item">
            <a className="item-title" href={item.link}>
              {item.title}
            </a>
            <div className="info">
              {item.author} / {item.isoDate && fmtDate(item.isoDate)}
            </div>
            <div dangerouslySetInnerHTML={{ __html: item.contentSnippet }} />
          </div>
        );
      })}
    </div>
  );
}
