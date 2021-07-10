import React, { FC } from 'react';

import { IFeedsItem } from '@/api';
import { fmtDate } from '@utils/tools';

import './index.scss';

interface DetailProps {
  dataSource: IFeedsItem;
}

const Detail: FC<DetailProps> = ({ dataSource }) => {
  return (
    <div className="detail-view">
      <div>
        {/* <pre>{JSON.stringify(dataSource, null, 2)}</pre> */}
        <a href={dataSource.link} className="title">
          <h2>{dataSource.title}</h2>
        </a>
        <div className="info">
          {dataSource.author} /{' '}
          {dataSource.isoDate && fmtDate(dataSource.isoDate)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: dataSource.content }} />
      </div>
    </div>
  );
};

export default Detail;
