import ImageResponsive from "../ImageResponsive/ImageResponsive"

const ilustration = './../../../public/home_ilustration.svg'

export default function Home() {
  return (
    <>
    <div className="flex my-20 py-4 items-center justify-center gap-4 shadow-inset-bottom-sky-400 ">
        <div className="flex-1 mx-14 ">
            <h1 className="font-extrabold antialiased text-4xl font-sans my-4 line-clamp-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos qui in necessitatibus facere officia, fuga obcaecati ad cum cupiditate vitae, commodi laboriosam excepturi, vel laudantium?</h1>
            <p className="font-medium antialiased text-xl font-sans my-4 line-clamp-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero sequi incidunt ullam, eligendi eum rem asperiores sapiente tenetur minima? Dicta laboriosam repellendus voluptatum deleniti voluptatem culpa sequi est facere corporis.</p>
        </div>
        <div className="flex-1 m-auto hidden sm:block">
            <ImageResponsive src={ilustration} alt={"Illustration"} className="w-2/3" />
        </div>
    </div>
    </>

    

  )
}