import React, { MutableRefObject, ReactNode } from 'react';

interface DropdownMenuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: MutableRefObject<any>;
  children: ReactNode;
}

function DropdownMenu({
  reference,
  children,
}: DropdownMenuProps) {
  return (
    <div
      className={`w-auto top-14 border rounded-b-md z-[100] absolute border-[#424242] bg-[#242424]`}
      ref={reference}
    >
      <div className='w-full flex flex-col'>{children}</div>
    </div>
  );
}

export default DropdownMenu;
