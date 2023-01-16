import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
        <Head title="Donations' List" />
        <div className='mx-20'>
        <header>
            <nav className="bg-white border-gray-200 py-2.5 rounded dark:bg-black-550">
                <div className="flex flex-wrap items-center w-full">
                    <div className="flex">
                        <a href="#" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Giftaway</span>
                        </a>
                        <span className="p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black-550 dark:border-gray-700"><i className="fa-regular fa-square-plus px-2"></i>Give an item</span>
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
            <h2 className="text-2xl">Welcome back, Idris.</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-black-550 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Timestamp
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Notes
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Scheduled date
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Platform
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Contact
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    NA name
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Discord ID
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Currencies
                                </th>
                                <th scope="col" className="px-6 py-3 truncate ...">
                                    Items
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-black-550 dark:border-gray-700">
                                <td className="px-6 py-2">
                                    <a href="#" className="font-medium text-lightgreen-500 dark:text-blue-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    12/01
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    Collected
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    passed to Luna
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    12/02
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    Nookazon
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    Contact
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    Nisune
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    550145862148625
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    2 bells
                                </td>
                                <td className="px-6 py-4 truncate ...">
                                    2 Snowflakes Leaves, 3 Maple Leaves, ...
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </main>
        <footer>
            <div className="my-4">
                <button type="button" className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Donations</button>
                <button type="button" className="text-white bg-red-550 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">No date!</button>
                <button type="button" className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scheduled giveaways</button>
            </div>
        </footer>
        </div>
        </>
    );
}
