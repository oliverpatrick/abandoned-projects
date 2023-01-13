import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  href: string;
  name: string;
}

function NavbarItem({ href, name }: NavbarItemProps) {
  return (
    <li className="drop-shadow-2xl">
      <Link href={href}>
        <a className="mx-3 flex items-center border-b border-[#9D1CCB] py-2 text-xs font-bold uppercase leading-snug text-[#9D1CCB] hover:opacity-75">
          <span>{name}</span>
        </a>
      </Link>
    </li>
  );
}

export default NavbarItem;
