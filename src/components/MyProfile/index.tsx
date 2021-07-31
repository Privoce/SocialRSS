import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import avatarImg from './img/avatar.png';
import './index.scss';

interface MyProfileProps {
  avatar?: string;
  username: string;
  tags: Array<string>;
  describe?: React.ReactNode;
  isFollow?: boolean;
  userID?: string;
  onChange?: (status: boolean | undefined) => void;
}

const prefix = 'sr-my-profile';

const MyProfile: FC<MyProfileProps> = ({
  username,
  describe,
  // tags,
  // isFollow,
  // onChange,
  avatar,
  userID,
}) => {
  const history = useHistory();
  // const renderTags = () => {
  //   return tags.map((i) => {
  //     return (
  //       <span className="tag" key={i}>
  //         #{i}
  //       </span>
  //     );
  //   });
  // };

  const handleEdit = () => {
    history.push('/profile');
  };

  return (
    <div className={prefix}>
      <img className={`${prefix}-avatar`} src={avatar} />
      <div className={`${prefix}-info`}>
        <div className={`${prefix}-head`}>
          <span className="username">{username}</span>
          <span className="edit-btn" onClick={handleEdit}>
            Edit
          </span>
        </div>
        <div className="id">ID: {userID}</div>
        {/* <div className="tags">{renderTags()}</div> */}
        <div className="describe">{describe}</div>
        <div className="follow-count">
          <div>
            <b>{320}</b>
            <span>Following</span>
          </div>
          <div>
            <b>{300}</b>
            <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MyProfile.defaultProps = {
  avatar: avatarImg,
};

export default MyProfile;
