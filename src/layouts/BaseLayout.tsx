import React, { FC } from 'react';

import Router from '@/router/Router';
import { RouteOption } from '@/router/types';
import SideMenu from './SideMenu';
import './index.scss';

interface BaseLayoutProps {
  children: React.ReactNode;
  routes: Array<RouteOption>;
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  return (
    <div className="base-layout">
      <SideMenu />
      <div className="main">
        <Router routes={props.routes} />
      </div>
      {/* <div>{children}</div> */}
    </div>
  );
};

export default BaseLayout;
