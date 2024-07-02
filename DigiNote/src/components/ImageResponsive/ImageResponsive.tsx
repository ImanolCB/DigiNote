// import React from 'react';

interface IResponsiveImage {
  src: string,
  alt: string,
  className?: string,
}

export default function ImageResponsive( {src = '', alt = '', className = ''}:IResponsiveImage) {

  return (
    <>
        <div className={`m-auto overflow-hidden object-cover pointer-events-none ${className}`}>
            <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover"
            />
        </div>
    </>
    
  );
}