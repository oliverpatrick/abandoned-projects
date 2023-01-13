import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { IconButton } from '../Button/IconButton';
import NavbarItem from './NavbarItem';

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed z-50 flex w-full flex-wrap items-center justify-between bg-transparent px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link href="/" passHref>
            <img
              src={`${router.basePath}/assets/images/Cloud9Logo.png`}
              alt="Cloud9 Logo"
              className="flex h-10 cursor-pointer items-center text-gray-500"
            ></img>
          </Link>
          <button
            className="ml-3 cursor-pointer border-slate-100 p-2 text-xl text-gray-500 outline-none hover:border-slate-100 focus:outline-none lg:hidden"
            type="button"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>

        <div
          className={`lg:flex  items-center justify-end ${
            open ? ' flex w-full pt-1' : ' hidden'
          }`}
          id="example-navbar-danger"
        >
          <ul className="z-40 flex list-none flex-col lg:ml-auto lg:flex-row">
            <li className="drop-shadow-2xl">
              <a
                href="mailto:opphdev@gmail.com"
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
              >
                <Link href="/contact" passHref>
                  <IconButton
                    text="Free Consultation"
                    className="inline-flex items-center border bg-transparent py-2 px-4 text-center font-bold uppercase hover:bg-slate-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 pr-1 text-lg text-[#9D1CCB] opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </IconButton>
                </Link>
              </a>
            </li>
            <NavbarItem href={'/'} name={'Home'} />
            <NavbarItem href={'/aboutus'} name={'About Us'} />
            <NavbarItem href={'/contact'} name={'Contact'} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
