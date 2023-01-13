import React from 'react';

import { Button } from '../Button/Button';

interface ContactProps {
  placeholder: string;
}

function Contact({ placeholder }: ContactProps) {
  console.log(placeholder);
  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 pt-20">
      <div className="mx-auto mb-12 max-w-5xl px-6 sm:px-6 lg:px-8">
        <div className="w-full bg-white p-8 shadow sm:p-12">
          <h1>CONTACT US</h1>
          <p></p>
          <form action="" method="post">
            <div className="mt-12 items-center md:flex">
              <div className="flex w-full flex-col md:w-1/2">
                <label className="font-semibold leading-none">Name</label>
                <input
                  type="text"
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                <label className="font-semibold leading-none">Email</label>
                <input
                  type="email"
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-12 items-center md:flex">
              <div className="flex w-full flex-col md:w-1/2">
                <label className="font-semibold leading-none">Phone</label>
                <input
                  type="text"
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
              <div className="mt-4 flex w-full flex-col md:ml-6 md:mt-0 md:w-1/2">
                <label className="font-semibold leading-none">Project</label>
                <input
                  type="email"
                  className="mt-4 rounded border border-gray-200 bg-gray-100 p-3 leading-none text-gray-900 focus:border-blue-700 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <div className="mt-8 flex w-full flex-col">
                <label className="font-semibold leading-none">Message</label>
                <textarea className="focus:oultine-none mt-4 h-40 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 focus:border-blue-700"></textarea>
              </div>
            </div>
            <div className="m-2 flex w-full items-center justify-center">
              <Button text="Start your journey"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
