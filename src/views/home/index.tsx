import React from 'react';

import RadioGroup from '@comps/RadioGroup';
import RssItem from '@comps/RssItem';

import './index.scss';

export default function HomeView() {
  const handleChange = (val: string) => {
    console.log('TODO:', val);
  };

  return (
    <div className="home-view">
      <div className="home-head">
        <div>Following</div>
        <div>
          <RadioGroup
            options={[
              { label: 'Today', value: 'today' },
              { label: 'Unread Only', value: 'unread_only' },
            ]}
            value="today"
            onChange={handleChange}
          />
        </div>
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
