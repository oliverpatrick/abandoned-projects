import React, { ReactNode } from 'react';
import useClickOutside from '../../utils/hooks/useClickOutside';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

interface DropdownButtonProps {
  text?: string;
  children: ReactNode
}

function DropdownButton({
  text,
  children
}: DropdownButtonProps) {
  const { ref, isOpen, setIsOpen } = useClickOutside(false);

  return (
    <div className='rounded-3xl hover:bg-[] '>
      <button
        className='hover:rounded-3xl text-[#818181] hover:bg-[#424242] px-2 py-1.5 flex flex-row justify-center items-center'
        onClick={() => setIsOpen(!isOpen)}
      >

        {text ? (
          <span className='text-sm font-semibold text-[#b8b8b8]'>{text}</span>
        ) : null}

      </button>

      {isOpen && (
        <DropdownMenu reference={ref}>
          {children}
        </DropdownMenu>
      )}
    </div>
  );
}

export default DropdownButton;
