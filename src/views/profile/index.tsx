import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

export default function Profile() {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className="profile-view">
      <h2>Edit Your Profile</h2>
      <button onClick={handleBack}>Save Profile</button>
    </div>
  );
}
