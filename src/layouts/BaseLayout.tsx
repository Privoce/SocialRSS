import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Router from '@/router/Router';
import { RouteOption } from '@/router/types';
import { getCookie } from '@utils/tools';

import SideMenu from './SideMenu';
import './index.scss';

interface BaseLayoutProps {
  children: React.ReactNode;
  routes: Array<RouteOption>;
}

const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (!getCookie('token')) history.push('/login');
  }, []);
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
