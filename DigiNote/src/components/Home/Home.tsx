import chatImg from './../../assets/img/chat.svg';
import linkImg from './../../assets/img/links.svg';
import ilustration from './../../../public/home_ilustration.svg';
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ImageResponsive from "../ImageResponsive/ImageResponsive";

export default function Home() {
  return (
    <>
      <section className="flex h-screen py-4 items-center ">
        <div className="flex-1 mx-14 ">
          <h1 className="font-extrabold antialiased text-4xl font-sans my-4 line-clamp-3">
            DigiNote para plataforma web 
          </h1>

          <p className="font-light antialiased text-xl font-sans my-6">
            Bienvenido a <b className="font-bold text-sky-400">DigiNote</b>, tu plataforma para <b className="font-bold text-sky-400">almacenar y organizar enlaces</b> web de manera visual y accesible.
            Guarda tus sitios favoritos y clasifícalos en categorías destacadas con imágenes y títulos claros.
          </p>

          <p className="font-light antialiased text-xl font-sans my-6">
            Comparte estos recursos con otros usuarios y <b className="font-bold text-sky-400">chatea</b> con ellos para crear una comunidad colaborativa. 
            DigiNote facilita tu acceso a información valiosa y mantiene tus enlaces organizados y siempre a mano.
          </p>
        </div>
        <div className="flex-1 m-auto hidden sm:block">
          <ImageResponsive src={ilustration} alt={"Illustration"} className="w-2/3" />
        </div>
      </section>

      <section className="m-auto px-5">
        <div className="text-center flex flex-wrap items-center sm:divide-x">
          <div className="grow">
            <Card 
              title="Links"
              description="Biblioteca de recursos personal"
              href=""
              imageSrc={linkImg}
              buttonValue="Acceder"
            />
          </div>

          <div className="grow">
            <Card 
              title="Bootstrap"
              description="aschugbikj iauscbd iascuh"
              href=""
              imageSrc={chatImg}
              buttonValue="Acceder"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
