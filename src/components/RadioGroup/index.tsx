import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import './index.scss';

type Item = {
  label: string;
  value: string;
};

interface RadioGroupProps {
  options: Array<Item>;
  value?: string;
  onChange?: (value: string, item?: Item) => void;
}

const RadioGroup: FC<RadioGroupProps> = ({ options, value, onChange }) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
    if (value) {
      const item = options.find((i) => i.value === value);
      value && onChange && onChange(value, item);
    }
  }, [value]);

  const handleSelect = (item: Item) => {
    setVal(item.value);
    onChange && onChange(item.value, item);
  };

  return (
    <div className="sr-radiogroup">
      {options.map((item) => (
        <span
          key={item.value}
          onClick={() => handleSelect(item)}
          className={clsx('item', { checked: item.value === val })}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default RadioGroup;
