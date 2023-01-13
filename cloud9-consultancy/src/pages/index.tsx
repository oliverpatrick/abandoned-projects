import Link from 'next/link';

import { IconButton } from '@/components/Button/IconButton';
import Hero from '@/components/Hero/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Tom Rosik" description="Enter your SEO" />}>
      <Hero
        primaryText="Take Your Buisness To The Next Level"
        secondaryText="Expand your horizons with Orbital Marketing contact me now for a free consultation"
        button={true}
        buttonText="Free Consultation"
        imageBg="https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        videoBg="/assets/videos/video.mp4"
      />

      <section className="py-20">
        <div className="container flex max-w-5xl flex-col items-center justify-center">
          <h1 className="text-5xl font-thin italic text-[#9D1CCB]">
            Take your business
          </h1>
          <h1 className="ml-20 text-4xl">to the clouds!</h1>
        </div>
      </section>

      <section className="border-b bg-white py-8">
        <div className="container m-8 mx-auto max-w-5xl">
          <h1 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
            Services
          </h1>

          <div className="mb-4 w-full">
            <div className="mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="p-6 text-center sm:w-1/2">
              <h3 className="mb-3 stroke-slate-100 text-3xl font-bold leading-none text-[#9D1CCB]">
                Website
              </h3>
              <p className="mb-8 text-gray-600">
                We can assist on design-creation and management of your website.
                Take your website to the next level with our expert in-house
                software and development team.
              </p>
            </div>
            <div className="w-full p-6 sm:w-1/2"></div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row">
            <div className="mt-6 w-full p-6 sm:w-5/6"></div>
            <div className="mt-6 w-full p-6 text-center">
              <h3 className="mb-3 stroke-slate-100 text-3xl font-bold leading-none text-[#9D1CCB]">
                Social Media
              </h3>
              <p className="mb-8 text-gray-600">
                We believe that are 2 key things in brand awareness which is
                staying original and staying consistent. From full management
                and strategies we also can also teach you the tricks of the
                trade.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="p-6 text-center sm:w-1/2">
              <h3 className="mb-3 stroke-slate-100 text-3xl font-bold leading-none text-[#9D1CCB]">
                Graphic Design, Videography and Photography
              </h3>
              <p className="mb-8 text-gray-600">
                We pride ourselves on having unmatched imagination creating
                original compelling content designed for your brand. From logos
                to creating promotional content we cover all bases.
              </p>
            </div>
            <div className="w-full p-6 sm:w-1/2"></div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row">
            <div className="mt-6 w-full p-6 sm:w-5/6"></div>
            <div className="mt-6 w-full p-6 text-center">
              <h3 className="mb-3 stroke-slate-100 text-3xl font-bold leading-none text-[#9D1CCB]">
                Advertising
              </h3>
              <p className="mb-8 text-gray-600">
                With proven results within our team we make sure your ads are
                reaching your ideal customer with the right content at the right
                time with the right message. Stop putting your budgets down the
                drain!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h1 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
            WHY US
          </h1>
          <div className="mb-4 w-full">
            <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Get it done
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                NOW OR NEVER
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                We believe action equals reaction always. Therefore once we’ve
                identified your requirements we then get down to business.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Consistency
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                ALWAYS ACTIVE, ALWAYS ON
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                By working through social media, we provide quick services and
                responses allowing us to progress with projects fast.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Actions speak louder than words
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                WE AIM FOR RESULTS NOT PROJECTS
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                A good looking website or video might not always be the best
                solution. We need to make sure the plan works.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Actions speak louder than words
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                OUTSIDE THE BOX
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                We love to come up with ideas outside the box, but sometimes the
                simple ideas are the right moves!
              </p>
            </div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Honest Pricing
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                PRICE IS THE PRICE
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                No overcharging or random invoices. Pricing is agreed upfront,
                so that we can focus on the important things, delivery followed
                by results.
              </p>
            </div>
          </div>

          <div className="flex w-full shrink grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden rounded-t rounded-b-none bg-white shadow">
              <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                Actions speak louder than words
              </p>
              <div className="w-full px-6 text-xl font-bold text-gray-800">
                WE DELIVER
              </div>
              <p className="mb-5 px-6 text-base text-gray-800">
                We promise to bring creative compelling ideas that are aligned
                with your commercial and brand objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <svg
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="bg-white">
              <path
                fill="white"
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                  fill="#5b21b6"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                  fill="#5b21b6"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                  fill="#5b21b6"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto mb-12 py-6 text-center">
        <h1 className="my-2 w-full text-5xl font-bold leading-tight text-gray-400">
          <Link href="/contact" passHref>
            <IconButton className="med:w-full mx-auto my-6 bg-[#9D1CCB] py-4 px-8 font-bold text-white shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:shadow-lg focus:outline-none lg:mx-0">
              Get in touch
            </IconButton>
          </Link>
        </h1>
        <div className="mb-4 w-full">
          <div className="mx-auto my-0 h-1 w-1/6 rounded-t bg-white py-0 opacity-25"></div>
        </div>
      </section>

      <footer className="w-full bg-gray-200 text-center text-white">
        <div className="w-full pt-9">
          <div className="mb-9 flex justify-center">
            <a
              href="https://www.instagram.com/oliverjpatrick/"
              className="mr-9 text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/oliver-patrick-4b6bb4ba/"
              className="mr-9 text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                className="svg-inline--fa fa-linkedin-in w-3.5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
            <a
              href="https://github.com/oliverpatrick"
              className="text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                className="svg-inline--fa fa-github w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 bg-slate-300 p-4 py-8 text-center text-sm text-gray-700">
          © 2022 Copyright - Tom Rosik | Created by{' '}
          <a className="text-purple-800" href="https://opdev.co.uk/">
            OPDev
          </a>
        </div>
      </footer>
    </Main>
  );
};

export default Index;
