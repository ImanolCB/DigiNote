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

// import ImageResponsive from "../ImageResponsive/ImageResponsive";

  interface ICard{
    title: string,
    description?: string,
    imageSrc?: string,
    imageAlt?: string,
    href?: string,
    buttonValue: string,
    visibilityButton?: boolean,
  }


// const callouts = 
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     }
  
  export default function Card({title, description , imageSrc='' , imageAlt, href = '', buttonValue, visibilityButton = true}:ICard) {
    return (
      <div className="relative m-auto flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 grayscale transition-all duration-300 hover:grayscale-0">
         {imageSrc === '' 
            ? <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-500 bg-clip-border text-white shadow-lg shadow-gray-500/40 bg-gradient-to-b from-white to-sky-600" />
            : <ImageResponsive src={imageSrc} alt={imageAlt} className="relative mx-4 -mt-8 h-40 overflow-hidden rounded-xl" />
         }
         
         <div className="p-6">
           <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
           </h5>
           <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
           {description} 
           </p>
         </div>
         <div className="p-6 pt-0">
          {visibilityButton && href != ''
            ?
            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-sky-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
             {buttonValue}
           </button>
            : ''
          }
           
         </div>
      </div>
    
    )
  }
  