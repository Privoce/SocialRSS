import React from 'react';
import { useHistory } from 'react-router-dom';

import AddButton from '@comps/AddButton';
import SubscriptionItem from '@comps/SubscriptionItem';
import SubscriptionPanel from '@comps/SubscriptionPanel';

import './index.scss';

export default function FollowingView() {
  const history = useHistory();

  return (
    <div className="subscription-view">
      <div className="subscription-head">
        <h2>Subscription Management</h2>
        <AddButton onClick={() => history.push('/subscription/new')}>
          Add New Subscriptions
        </AddButton>
      </div>
      <SubscriptionPanel title="People" type="people">
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
      </SubscriptionPanel>
      <SubscriptionPanel title="Websites" type="websites">
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
      </SubscriptionPanel>
      <SubscriptionPanel title="Newsletters" type="newsletters">
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
        <SubscriptionItem title="New York Times" />
      </SubscriptionPanel>
    </div>
  );
}
