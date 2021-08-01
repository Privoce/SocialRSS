import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import avatar from './avatar.png';
import './index.scss';

export default function Profile() {
  const history = useHistory();
  const [file, setFile] = useState(null);
  const [previewImg, setPreview] = useState<any>(null);

  const handleBack = () => {
    history.push('/');
  };

  const handleFile = (e: any) => {
    setFile(e.target);
    const [file] = e.target.files;
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="profile-view">
      <h2>Edit Your Profile</h2>
      <div className="form-item">
        <div className="label">Photo</div>
        <div className="upload">
          <img src={previewImg || avatar} />
          <div className="upload-file">
            Upload new photo
            <input type="file" onChange={handleFile} accept="image/*" />
          </div>
        </div>
      </div>
      <div className="form-item">
        <div className="label">
          Name <i>*</i>
        </div>
        <div>
          <input placeholder="Add your bio" />
        </div>
        <div className="tip">We are big on real names around here.</div>
      </div>
      <div className="form-item">
        <div className="label">Bio</div>
        <div>
          <input placeholder="Add your bio" />
        </div>
        <div className="tip">
          Let people know who you are. Max 160 characters.
        </div>
      </div>
      <button className="save-btn" onClick={handleBack}>
        Save Profile
      </button>
    </div>
  );
}
