import { Link } from "react-router-dom";
import ImageResponsive from "../ImageResponsive/ImageResponsive";
  interface ICard{
    title: string,
    description?: string,
    imageSrc?: string,
    imageAlt?: string,
    href?: string,
    buttonValue: string,
    visibilityButton?: boolean,
  }
  
  export default function Card({title, description , imageSrc='' , imageAlt, href = '', buttonValue, visibilityButton = true}:ICard) {
    return (
      <div className="relative items-center m-auto flex w-fit flex-col rounded-xl bg-white bg-clip-border text-gray-700 grayscale transition-all duration-300 hover:grayscale-0">
         
         {/* Si a la tarjeta tiene una ruta de imagen valida asignada se mostrará la imagen seleccionada, de lo contrario se mostrará una alternativa */}
         
         {imageSrc === '' 
            ? <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-500 bg-clip-border text-white shadow-lg shadow-gray-500/40 bg-gradient-to-b from-white to-sky-600" />
            : <ImageResponsive src={imageSrc} alt={imageAlt} className="relative h-64 overflow-hidden rounded-xl" /> /* --->  Imagen de la tarjeta*/
         }
         
         <div className="w-full p-6">
           <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title} {/* --->  Titulo de la tarjeta*/}
           </h5>
           <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description} {/* ---> Descripción de la tarjeta*/}
           </p>
         </div>

         <div className="w-full p-6">
         {/* Si el boton tiene habilitado que sea visible y se asigna un link para el botón se mostrará el link con el botón */}
          {visibilityButton && href != ''
            ?
             <Link to={href} > {/*? --->  Enlace de redireccionamiento del botón de la tarjeta*/}
              <button 
                data-ripple-light="true" 
                type="button" 
                className="my-auto select-none rounded-lg bg-sky-500 py-4 px-6 text-center font-sans text-md font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                {buttonValue}
              </button>
             </Link>
            : ''
          }
           
         </div>
      </div>
    
    )
  }
  