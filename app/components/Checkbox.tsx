import React, { useState } from 'react';

type CheckboxVariant = 'default' | 'variant2' | 'variant4' | 'variant5' | 'variant6' | 'variant7' | 'variant8' | 'variant9';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  isAllPagesHovered?: boolean;
}

export const Checkbox = ({ checked, onChange, label, isAllPagesHovered = false }: CheckboxProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<CheckboxVariant>('default');

  const effectiveHoverState = isHovered || isAllPagesHovered;

  const getCheckboxStyles = () => {
    const baseStyles = "w-4 h-4 border rounded flex items-center justify-center transition-none duration-0";
    
    switch (currentVariant) {
      case 'variant2': // hover
        return `${baseStyles} border-gray-400 bg-white`;
      case 'variant4': // clicked
        return `${baseStyles} ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`;
      case 'variant5': // mouse out
        return `${baseStyles} ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`;
      case 'variant6': // hover on checked
        return `${baseStyles} bg-blue-600 border-blue-600`;
      case 'variant7': // pressing on checked
        return `${baseStyles} bg-blue-700 border-blue-700`;
      case 'variant8': // hover
        return `${baseStyles} border-gray-400 bg-white`;
      case 'variant9': // pressing or mouse out
        return `${baseStyles} ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`;
      default:
        return `${baseStyles} ${checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white'}`;
    }
  };

  const getCheckmarkColor = () => {
    if (checked) {
      return 'text-white';
    } else if (effectiveHoverState) {
      return 'text-gray-200';
    } else {
      return 'text-gray-500';
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentVariant(checked ? 'variant6' : 'variant2');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentVariant(checked ? 'variant5' : 'default');
  };

  const handleMouseDown = () => {
    setCurrentVariant(checked ? 'variant7' : 'variant9');
  };

  const handleMouseUp = () => {
    setCurrentVariant(checked ? 'variant5' : 'variant4');
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onChange();
    setCurrentVariant('variant4');
    
    // Add a small delay before transitioning to variant2 then variant9
    setTimeout(() => {
      setCurrentVariant('variant2');
      setTimeout(() => {
        setCurrentVariant(checked ? 'variant5' : 'variant9');
      }, 0);
    }, 0);
  };

  return (
    <label className="flex items-center justify-between w-full cursor-pointer group h-[42px]">
      <span className="mr-2 text-[14px] leading-[18.2px] text-gray-700 group-hover:text-gray-900 text-left">
        {label}
      </span>
      <div 
        className={getCheckboxStyles()}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        {(checked || effectiveHoverState) && (
          <svg 
            className={`w-3 h-3 ${getCheckmarkColor()}`}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M2 6L5 9L10 3" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </label>
  );
};