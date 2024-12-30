import React from 'react';

interface DoneButtonProps {
  onClick: () => void;
}

export const DoneButton = ({ onClick }: DoneButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      Done
    </button>
  );
};
