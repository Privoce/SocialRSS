import React, { useEffect } from 'react';

import RadioGroup from '@comps/RadioGroup';
import RssItem from '@comps/RssItem';
import MyProfile from '@comps/MyProfile';
// import { getListByUser, getReactionList } from '@/api';

import './index.scss';

export default function HomeView() {
  const handleChange = (val: string) => {
    console.log('TODO:', val);
  };

  useEffect(() => {
    // (async () => {
    //   const data = await getListByUser('2');
    //   const data2 = await getReactionList();
    //   console.log('«17» /views/home/index.tsx ~> ', data);
    //   console.log('«19» /views/home/index.tsx ~> ', data2);
    // })();
  }, []);

  return (
    <div className="home-view">
      {/* <div className="home-head">
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
      </div> */}
      <div>
        <MyProfile
          username="Victoria Kjhak"
          userID="82381294"
          tags={['Lifestyle', 'Health', 'Fitness']}
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
