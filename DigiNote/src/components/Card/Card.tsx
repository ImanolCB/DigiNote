/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
  */

import ImageResponsive from "../ImageResponsive/ImageResponsive";

  interface ICard{
    title: string,
    description?: string,
    imageSrc?: string,
    imageAlt?: string,
    href?: string,
  }


// const callouts = 
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     }
  
  export default function Card({title, description , imageSrc , imageAlt, href}:ICard) {
    return (
      
      
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-6 sm:py-14 lg:max-w-none lg:py-24">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
  
            <div className="mt-6 space-y-12 lg:grid  lg:gap-x-6 lg:space-y-0 ">
              {/* {callouts.map((callout) => ( */}
                <div key={title} className="group relative">
                  <div className="relative w-full overflow-hidden rounded-lg bg-white  sm:aspect-w-2  lg:aspect-w-1 group-hover:opacity-75 ">
                    <ImageResponsive
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-24 md:w-32 lg:w-48"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={href}>
                      {/* <span className="absolute inset-0" /> */}
                      {title}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{description}</p>
                </div>
              {/* )) */}
              {/* } */}
            </div>
          </div>
        </div>
      </div>

      
    )
  }
  