import chatImg from './../assets/img/chat.svg';
import linkImg from './../assets/img/links.svg';
import ilustration from './../../public/home_ilustration.svg';
import Card from "../components/Card/Card";
import ImageResponsive from "../components/ImageResponsive/ImageResponsive";

export default function Home() {
  return (
    <>
      <div className=" m-auto flex-col">
        <section className="flex h-screen py-4 items-center ">
          <div className="flex-1 mx-14 ">
            <div className="md:w-4/5 m-auto">
              <h1 className="font-extrabold antialiased text-4xl font-sans my-4 line-clamp-3">
                  DigiNote 
                </h1>
    
                <p className="font-light antialiased text-balance text-xl font-sans my-6">
                  Bienvenido a <b className="font-bold text-sky-600/80">DigiNote</b>, tu plataforma para <b className="font-bold text-sky-600/80">almacenar y organizar enlaces</b> web de manera visual y accesible.
                  Guarda tus sitios favoritos y clasifícalos en categorías destacadas con imágenes y títulos claros.
                </p>
    
                <p className="font-light antialiased text-balance text-xl font-sans my-6">
                  Comparte estos recursos con otros usuarios y <b className="font-bold text-sky-600/80">chatea</b> con ellos para crear una comunidad colaborativa. 
                  DigiNote facilita tu acceso a información valiosa y mantiene tus enlaces organizados y siempre a mano.
                </p>
            </div>
          </div>
            
          <div className="flex-1 m-auto hidden sm:block">
            <ImageResponsive src={ilustration} alt={"Illustration"} className='md:w-2/3' />
          </div>
        </section>
            
        <section className="m-auto ">
          <div className="text-center flex flex-wrap items-center sm:divide-x">
            <div className="grow">
              <Card 
                title="Links"
                description="Biblioteca de recursos personal"
                href="../../pages/Login"
                imageSrc={linkImg}
                buttonValue="Acceder"
                visibilityButton
                />
            </div>
    
            <div className="grow">
              <Card 
                title="Chat"
                description="Chatea con conocidos"
                href="../../pages/Login"
                imageSrc={chatImg}
                buttonValue="Acceder"
                visibilityButton
              />
            </div>
          </div>
        </section>
      </div>
        
    </>
  );
}
