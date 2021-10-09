import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { rssDispatch } from '@/api';

import './index.scss';

export default function RssSearch() {
  const [val, setVal] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  const handleSearch = () => {
    if (val) {
      rssDispatch(val);
    } else {
      toast.warn('Please enter the rss link');
    }
  };

  return (
    <div className="sr-rss-search">
      <div className="search-box">
        <input
          className="search-input"
          placeholder="Paste RSS Link here"
          onChange={handleInput}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
