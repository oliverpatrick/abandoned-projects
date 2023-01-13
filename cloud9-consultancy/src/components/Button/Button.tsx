import React from 'react';

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <button
      type="button"
      className="pointer-cursor focus:shadow-outline mr-2 inline-flex items-center border bg-gradient-to-r from-pink-500 to-violet-500 py-2 px-4 text-center font-bold uppercase text-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:bg-green-700 focus:outline-none"
    >
      {text}
    </button>
  );
}
