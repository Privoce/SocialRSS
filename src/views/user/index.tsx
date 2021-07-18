import React from 'react';

import RssItem from '@comps/RssItem';
import RssProfile from '@comps/RssProfile';

import './index.scss';

export default function UserView() {
  return (
    <div className="user-view">
      <div>
        <RssProfile
          username="Victoria Kjhak"
          widget="24 Followers / #Lifestyle #Health"
          describe="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non."
        />
      </div>
      <div className="rss-list">
        <RssItem
          widget="Fast Company / 1 d"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim ..."
          reactions={[{ name: 'Suhan', avatar: '', id: '' }]}
        />
        <RssItem
          widget="Fast Company / 1 d"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim ..."
          reactions={[
            { name: 'Suhan', avatar: '', id: '' },
            { name: 'Tristian', avatar: '', id: '' },
          ]}
        />
        <RssItem
          widget="Fast Company / 1 d"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim ..."
          reactions={[
            { name: 'Suhan', avatar: '', id: '' },
            { name: 'Tristian', avatar: '', id: '' },
            { name: 'Tamoghna Dey', avatar: '', id: '' },
          ]}
        />
        <RssItem
          widget="Fast Company / 1 d"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim ..."
          reactions={[
            { name: 'Suhan', avatar: '', id: '' },
            { name: 'Tristian', avatar: '', id: '' },
            { name: 'Tamoghna Dey', avatar: '', id: '' },
            { name: 'Tamoghna Dey2', avatar: '', id: '' },
          ]}
        />
      </div>
    </div>
  );
}
