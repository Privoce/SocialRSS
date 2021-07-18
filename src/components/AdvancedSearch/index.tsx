import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';

import RadioGroup from '@comps/RadioGroup';

import './index.scss';

const options = [
  { label: 'Social Media', value: 'social_media' },
  { label: 'Design', value: 'design' },
  { label: 'News', value: 'news' },
];

export default function AdvancedSearch() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="sr-search">
      <RadioGroup
        options={[
          { label: 'People', value: 'people' },
          { label: 'Websites', value: 'websites' },
          { label: 'Newletters', value: 'newletters' },
        ]}
      />
      <div className="search-box">
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          overrideStrings={{
            allItemsAreSelected: 'All items are selected.',
            clearSearch: 'Clear Search',
            noOptions: 'No options',
            search: 'Search',
            selectAll: 'Select All',
            selectSomeItems: 'Select...',
          }}
        />
        <input
          className="search-input"
          placeholder="Website name or keywords..."
        />
        <button className="search-btn">Search</button>
      </div>
    </div>
  );
}
