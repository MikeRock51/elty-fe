'use client'
import React, { useState } from 'react';
import { SelectAllCheckbox } from './components/SelectAllCheckbox';
import { PageList } from './components/PageList';
import { DoneButton } from './components/DoneButton';
import { Modal } from './components/Modal';

const PageSelector = () => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [isAllPagesHovered, setIsAllPagesHovered] = useState<boolean>(false);
  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>({
    page1: false,
    page2: false,
    page3: false,
    page4: false
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setSelectedPages(Object.fromEntries(
      Object.keys(selectedPages).map(key => [key, newValue])
    ));
  };

  const handlePageSelect = (page: string) => {
    const newSelectedPages = {
      ...selectedPages,
      [page]: !selectedPages[page]
    };
    setSelectedPages(newSelectedPages);
    setSelectAll(Object.values(newSelectedPages).every(value => value));
  };

  const handleDone = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectAll(false);
    setSelectedPages({
      page1: false,
      page2: false,
      page3: false,
      page4: false
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm border border-gray-200 rounded-lg p-4 bg-white shadow-sm w-[370px] h-[326px]">
        <SelectAllCheckbox 
          checked={selectAll} 
          onChange={handleSelectAll}
          onHoverChange={setIsAllPagesHovered}
        />
        <PageList 
          selectedPages={selectedPages} 
          onPageSelect={handlePageSelect}
          isAllPagesHovered={isAllPagesHovered}
        />
        <DoneButton onClick={handleDone} />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} selectedPages={selectedPages} />
    </div>
  );
};

export default PageSelector;