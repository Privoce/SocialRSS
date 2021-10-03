import React, { useEffect, useState } from 'react';

// import RadioGroup from '@comps/RadioGroup';
import RssItem from '@comps/RssItem';
import MyProfile from '@comps/MyProfile';
import RssDetail from '@comps/RssDetail';
// import { getListByUser, getReactionList } from '@/api';

import './index.scss';

export default function HomeView() {
  // const handleChange = (val: string) => {
  //   console.log('TODO:', val);
  // };

  const [list, setList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState<any>(null);

  // useEffect(() => {
  //   (async () => {
  //     setLoading(true);
  //     const data: any = await getListByUser('2');
  //     setLoading(false);
  //     data.forEach((i: any) => {
  //       if (i && i.items) {
  //         setList([...list, ...i.items]);
  //       }
  //     });
  //   })();
  // }, []);

  const handleDetail = (data: any) => {
    setDetail(data);
  };

  const handleClose = () => {
    setDetail(null);
  };

  // console.log('«29» /views/home/index.tsx ~> ', list);

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
        {loading ? (
          <div>loading...</div>
        ) : (
          list.map((i: any) => {
            return (
              <RssItem
                key={i.contentId}
                widget="Fast Company / 1 d"
                title={i.title}
                img={i.icon}
                content={i.contentSnippet}
                reactions={[{ name: 'Suhan', avatar: '', id: '' }]}
                onView={handleDetail}
                rawData={i}
              />
            );
          })
        )}
        {/* <RssItem
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
        /> */}
      </div>
      <RssDetail dataSorce={detail} onClose={handleClose} />
    </div>
  );
}
