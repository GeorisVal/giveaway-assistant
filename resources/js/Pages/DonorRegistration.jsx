import { Link, Head } from '@inertiajs/inertia-react';

export default function DonorRegister(props) {
    return (
        <>
        <Head title="Donor Registration" />
        <div className='mx-20'>
        <header>
            <nav className="bg-white border-gray-200 py-2.5 rounded dark:bg-black-550">
                <div className="flex flex-wrap contactway-center w-full">
                    <div className="flex">
                        <Link href="/home" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Giftaway</span>
                        </Link>
                        <Link href="/DonorRegistration" className="flex items-center">
                            <span className="p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black-550 dark:border-gray-700"><i className="fa-regular fa-square-plus px-2"></i>Give an item</span>
                        </Link>
                        <span className="p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black-550 dark:border-gray-700"><i className="fa-regular fa-square-plus px-2"></i>Register for a giveaway</span>
                    </div>
                    <form className="mx-auto">   
                        <label for="default-search" className="mb-2 text-sm font-medium text-black-550 sr-only dark:text-white"><i className="fa-solid fa-magnifying-glass"></i></label>
                        <div className="relative">
                            <input type="search" id="default-search" className="block w-full p-2 pl-5 text-sm text-black-550 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
                            <button type="submit" className="text-white absolute right-1 bottom-1 bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                    <div className="w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black-550 dark:border-gray-700">
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-lightgreen-500 rounded md:bg-transparent md:text-lightgreen-500 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log out<i className="fa-solid fa-right-from-bracket px-2"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <form className="mx-96">
                <div className="mb-6">
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NA Username or Discord ID</label>
                    <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required></input>
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email (optional)</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email"></input>
                </div>
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred time for the exchange</p>
                <div className='flex flex-row'>
                    <div className="mb-6">
                        <label for="date"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discord ID" required></input>
                    </div>
                    <div className="mb-6">
                        <label for="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <input type="time" id="time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discord or NA" required></input>
                    </div>
                </div>
                <div className="mb-6">
                    <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred way to be contacted</p>
                    <div className="flex flex-col">
                        <div>
                            <input type="radio" id="discord" name="fav_platform" value="discord"></input>
                            <label for="discord" className='pl-2'>Discord</label>
                        </div>
                        <div>
                            <input type="radio" id="nookazon" name="fav_platform" value="nookazon"></input>
                            <label for="nookazon" className='pl-2'>Nookazon</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-lightgreen-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </main>
        </div>
        </>
    );
}
