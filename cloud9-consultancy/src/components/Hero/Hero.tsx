import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { IconButton } from '../Button/IconButton';

interface HeroProps {
  tagLine?: string;
  primaryText: string;
  secondaryText?: string;
  button: boolean;
  buttonText?: string;
  imageBg: string;
  videoBg: string;
}

function Hero({
  tagLine,
  primaryText,
  secondaryText,
  button,
  buttonText,
  imageBg,
  videoBg,
}: HeroProps) {
  const router = useRouter();
  return (
    <article className="relative flex min-h-screen w-full flex-col overflow-hidden bg-cover bg-no-repeat sm:flex-row">
      <video
        autoPlay
        muted
        playsInline
        loop
        className="absolute h-full w-full object-cover"
        poster={imageBg}
      >
        <source src={`${router.basePath}${videoBg}`} type="video/mp4" />
      </video>
      <section className="med:p-16 z-10 flex w-full flex-col justify-center space-y-8 p-8 text-left sm:w-1/2 sm:space-y-16">
        <p className="text-sm">{tagLine}</p>
        <h1 className="med:text-6xl text-4xl leading-10 sm:mt-20 sm:text-5xl">
          {primaryText}
        </h1>
        <p className="mb-8 text-2xl leading-normal">{secondaryText}</p>
        <div className="flex justify-center">
          {button ? (
            <Link href="/contact">
              <IconButton className="med:w-full mx-auto my-6 bg-[#9D1CCB] py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:shadow-lg focus:outline-none lg:mx-0">
                {buttonText}
              </IconButton>
            </Link>
          ) : null}
        </div>
      </section>
    </article>
  );
}

export default Hero;
