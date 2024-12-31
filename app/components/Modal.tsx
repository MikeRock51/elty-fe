import React, { useRef, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPages: Record<string, boolean>;
}

export const Modal = ({ isOpen, onClose, selectedPages }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedPageList = Object.keys(selectedPages).filter(page => selectedPages[page]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Selected Pages</h2>
        <ul className="list-disc list-inside text-gray-700">
          {selectedPageList.length > 0 ? (
            selectedPageList.map(page => <li key={page}>{page}</li>)
          ) : (
            <li>No pages selected</li>
          )}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-[#FFCE22] hover:bg-[#FFD84D] active:bg-[#FFD84D] text-white py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};
