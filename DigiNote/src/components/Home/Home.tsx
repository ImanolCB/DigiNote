import Card from "../Card/Card"
import ImageResponsive from "../ImageResponsive/ImageResponsive"

const ilustration = './../../../public/home_ilustration.svg'

export default function Home() {
  return (
    <>
    <section className="flex my-20 py-4 items-center justify-center gap-4  ">
        <div className="flex-1 mx-14 ">
            <h1 className="font-extrabold antialiased text-4xl font-sans my-4 line-clamp-3">
              DigiNote para plataforma web 
            </h1>
            <p className="font-medium antialiased text-xl font-sans my-4 line-clamp-3">
                Bienvenido a DigiNote, tu plataforma para almacenar y organizar enlaces web de manera visual y accesible.
                Guarda tus sitios favoritos y clasifícalos en categorías destacadas con imágenes y títulos claros. 
                Comparte estos recursos con otros usuarios y chatea con ellos para crear una comunidad colaborativa. 
                DigiNote facilita tu acceso a información valiosa y mantiene tus enlaces organizados y siempre a mano.
            </p>
        </div>
        <div className="flex-1 m-auto hidden sm:block">
            <ImageResponsive src={ilustration} alt={"Illustration"} className="w-2/3" />
        </div>
    </section>

    <section className="m-auto px-5 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        <div className="text-center ">
          <Card 
          title="Bootstrap"
          imageSrc="https://cdn.icon-icons.com/icons2/2415/PNG/512/bootstrap_plain_logo_icon_146619.png"
          />
        </div>
        <div className="text-center ">
          <Card 
          title="JS"
          imageSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_js_official_icon_130509.png"
          />
        </div>
        <div className="text-center ">
          <Card 
          title="React"
          imageSrc="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
          />
        </div>
        <div className="text-center ">
          <Card 
          title="VUE"
          imageSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vue_icon_130078.png"
          />
        </div>
        <div className="text-center ">
          <Card 
          title="Angular"
          imageSrc="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png"
          />
        </div>
      </div>
    </section>
    </>

    

  )
}