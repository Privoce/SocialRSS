import React from 'react';

import RssSearch from '@/components/RssSearch';

import './index.scss';

export default function NewSubscriptionsView() {
  return (
    <div className="new-source-view">
      <h2>Add New Source</h2>
      <RssSearch />
    </div>
  );
}
