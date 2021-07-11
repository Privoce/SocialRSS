import React from 'react';

import SubscriptionItem from '@comps/SubscriptionItem';

import './index.scss';

export default function NewSubscriptionsView() {
  return (
    <div className="subscription-new-view">
      <h2>Add New Subscriptions</h2>
      <div className="subscription-new-list">
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
      </div>
    </div>
  );
}
