import { Link, Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
// import NavLink from '/vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/NavLink';

export default function Welcome(props) {
    return (
        <>
        <Head title="Donations' List" />
        
        <div className='mx-20'>
        <header>
        <NavLink></NavLink>
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
