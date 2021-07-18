import React from 'react';

import SubscriptionItem from '@comps/SubscriptionItem';
import AdvancedSearch from '@/components/AdvancedSearch';

import './index.scss';

export default function NewSubscriptionsView() {
  return (
    <div className="subscription-new-view">
      <h2>Add New Subscriptions</h2>
      <AdvancedSearch />
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
