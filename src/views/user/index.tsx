import React from 'react';

import RssItem from '@comps/RssItem';

import './index.scss';

export default function UserView() {
  return (
    <div className="subscription-new-view">
      <div></div>
      <div className="rss-list">
        <RssItem
          widget="Fast Company / 1 d"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim ..."
          reactions="Su Han, Tristian and 3 others"
        />
      </div>
    </div>
  );
}
