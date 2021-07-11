import React from 'react';

import AddButton from '@comps/AddButton';
import SubscriptionItem from '@comps/SubscriptionItem';

import './index.scss';

export default function FollowingView() {
  return (
    <div className="subscription-view">
      <h2 className="subscription-head">Subscription Management</h2>
      <div className="add-actions">
        <div>
          <span>People</span>
          <AddButton>Add People</AddButton>
        </div>
      </div>
      <div className="subscription-list">
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
      </div>
      <div className="add-actions">
        <div>
          <span>Sources</span>
          <AddButton>Add New Sources</AddButton>
        </div>
      </div>
      <div className="subscription-list">
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
