 const logo = './../../../public/logo.svg'

 

export default function NavBar() {
  return (
    <>
      <nav className="bg-blue-400 backdrop-blur-md fixed w-full top-0 left-0 z-10">
        <div className="mx-2 px-4 py-2 flex justify-between items-center">
          {/* Left Side - Logo and About */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Company Logo" className="h-20 w-20" />
            <span className="text-white text-lg font-bold">Company</span>
            <a href="#about" className="text-white hover:text-gray-300">About</a>
          </div>
          {/* Right Side - Mi cuenta */}
          <div>
            <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Mi cuenta</button>
          </div>
        </div>
      </nav>
    </>
  )
}