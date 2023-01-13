import type { ReactNode } from 'react';

import Navbar from '@/components/Navbar/Navbar';

interface IMainProps {
  meta: ReactNode;
  children: ReactNode;
}

const Main = ({ meta, children }: IMainProps) => (
  <div className="w-full text-gray-700">
    {meta}
    <Navbar />
    <div className="content text-xl">{children}</div>
  </div>
);

export { Main };
