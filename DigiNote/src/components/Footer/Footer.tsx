const logo = './../../../public/logo.svg';
export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow shadow-md shadow-white bg-neutral-50 mt-48 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="DigiNote Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">DigiNote</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-grey-900 sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:text-gray-400 me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400 me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">DigiNote</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
  }