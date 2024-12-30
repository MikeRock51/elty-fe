import React from 'react';
import { Checkbox } from './Checkbox';

interface SelectAllCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export const SelectAllCheckbox = ({ checked, onChange }: SelectAllCheckboxProps) => {
  return (
    <div className=" pb-3 h-[42px]">
      <Checkbox
        checked={checked}
        onChange={onChange}
        label="All pages"
      />
    </div>
  );
};
