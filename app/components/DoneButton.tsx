import React from 'react';

interface DoneButtonProps {
  onClick: () => void;
}

export const DoneButton = ({ onClick }: DoneButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-3 bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#FFD84D] text-black py-2 rounded-md transition-colors duration-200 focus:outline-none"
    >
      Done
    </button>
  );
};
