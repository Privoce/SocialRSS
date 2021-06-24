import React from 'react';
import { useTwitterUser } from '@hooks/useAPI';

import './index.scss';

export default function AboutView() {
  const { data, loading } = useTwitterUser('DIYgod');

  if (loading) return <div>loading...</div>;

  return (
    <div className="home-view">
      {data?.items?.map((item) => {
        return (
          <div key={item.guid}>
            <h3>{item.title}</h3>
            <div>{item.author}</div>
            <div dangerouslySetInnerHTML={{ __html: item.contentSnippet }} />
          </div>
        );
      })}
    </div>
  );
}
