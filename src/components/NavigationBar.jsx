const NavigationBar = () => {
    return (
        <nav className="bg-white border-gray-200  w-full py-2.5">
            <div className="w-full flex items-center justify-between px-4">
                <a href="#" className="flex items-center space-x-3">
                    <img src="./arahant_logo.jpg" className="h-9" alt="logo" />
                </a>
                <div className="flex justify-end flex-1 py-2" id="navbar">
                    <ul className="font-medium flex flex-row items-center space-x-8">
                        <li>
                            <a href="/" className="block py-2 px-3 text-white bg-[#f86d4e] rounded md:bg-transparent md:text-[#f86d4e] md:p-0 dark:text-white md:dark:text-[#f86d4e]" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/technologies" className="block py-2 px-3 text-[#f86d4e] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f86d4e] md:p-0 dark:text-white md:dark:hover:text-[#f86d4e] dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">Technologies</a>
                        </li>
                        <li>
                            <a href="/itsolutions" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f86d4e] md:p-0 dark:text-white md:dark:hover:text-[#f86d4e] dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">IT Solutions</a>
                        </li>
                        {/* Hiding The Siemens page for now */}
                        {/* <li>
                            <a href="/siemens" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">Siemens</a>
                        </li> */}
                        <li>
                            <a href="/about" className="block py-2 px-3 text-[#f86d4e] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f86d4e] md:p-0 dark:text-white md:dark:hover:text-[#f86d4e] dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#f86d4e] md:p-0 dark:text-white md:dark:hover:text-[#f86d4e] dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;