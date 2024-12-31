import React from 'react';
import { Checkbox } from './Checkbox';

interface PageListProps {
  selectedPages: Record<string, boolean>;
  onPageSelect: (page: string) => void;
  isAllPagesHovered?: boolean;
}

export const PageList = ({ selectedPages, onPageSelect, isAllPagesHovered = false }: PageListProps) => {
  return (
    <div className="py-3 border-b border-t border-gray-200">
      {Object.keys(selectedPages).map((page, index) => (
        <Checkbox
          key={page}
          checked={selectedPages[page]}
          onChange={() => onPageSelect(page)}
          label={`Page ${index + 1}`}
          isAllPagesHovered={isAllPagesHovered}
        />
      ))}
    </div>
  );
};
