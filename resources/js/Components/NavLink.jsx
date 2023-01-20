import { Link } from '@inertiajs/react';

export default function NavLink({ href, active, children }) {
    return (
        <>
            <nav className="bg-white border-gray-200 py-2.5 rounded">
                <div className="flex flex-wrap items-center w-full">
                    <div className="flex">
                        <Link href="/home" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap ">Giftaway</span>
                        </Link>
                        <Link href="/DonorRegistration" className="flex items-center hover:text-lightgreen-500">
                            <span className="p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"><i className="fa-regular fa-square-plus px-2"></i>Give an item</span>
                        </Link>
                    </div>
                    <form className="mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-black-550 sr-only"><i className="fa-solid fa-magnifying-glass"></i></label>
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-2 pl-5 text-sm text-black-550 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required/>
                            <button type="submit" className="text-white absolute right-1 bottom-1 bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                    <div className="w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-lightgreen-500 rounded md:bg-transparent md:text-lightgreen-500 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lightgreen-500 md:p-0">Log out<i className="fa-solid fa-right-from-bracket px-2"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h2 className="text-2xl">Welcome back, Idris.</h2>
        </>
    );
}
