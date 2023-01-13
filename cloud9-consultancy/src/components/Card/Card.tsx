import React from 'react';

interface CardProps {
  subTitle: string;
  title: string;
  description: string;
}

function Card({ subTitle, title, description }: CardProps) {
  return (
    <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
      <p className="w-full px-6 text-xs text-gray-600 md:text-sm">{subTitle}</p>
      <div className="w-full px-6 text-xl font-bold text-gray-800">{title}</div>
      <p className="mb-5 px-6 text-base text-gray-800">{description}</p>
    </div>
  );
}

export default Card;
