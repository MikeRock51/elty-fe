import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

interface SelectAllCheckboxProps {
  checked: boolean;
  onChange: () => void;
  onHoverChange: (isHovered: boolean) => void;
}

export const SelectAllCheckbox = ({ checked, onChange, onHoverChange }: SelectAllCheckboxProps) => {
  const handleMouseEnter = () => onHoverChange(true);
  const handleMouseLeave = () => onHoverChange(false);

  return (
    <div 
      className="pb-3 h-[42px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Checkbox
        checked={checked}
        onChange={onChange}
        label="All pages"
      />
    </div>
  );
};
