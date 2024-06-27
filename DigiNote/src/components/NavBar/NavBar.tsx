import Button from "../Button/Button"

const logo = './../../../public/logo.svg'

export default function NavBar() {
  return (
    <>
      <nav className="bg-sky-400/60 backdrop-blur-md shadow-sky-200 shadow-md fixed w-full top-0 left-0 z-10">
        <div className="mx-2 px-4 py-2 flex justify-between items-center">
          {/* Left Side - Logo and About */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Company Logo" className="h-20 w-20" />
            <span className="text-white text-lg font-bold">DigiNote</span>
            <a href="#about" className="text-white hover:text-gray-600">About</a>
          </div>
          {/* Right Side - Mi cuenta */}
          <div>
            {/* <button className="text-white bg-sky-500 hover:bg-white/30 hover:text-gray-800 px-4 py-2  border border-sky-500 rounded-lg transition duration-500">Mi cuenta</button> */}
            <Button type="button" content="Mi cuenta" />
          </div>
        </div>
      </nav>
    </>
  )
}