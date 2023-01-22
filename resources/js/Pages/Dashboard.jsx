import NavLink from '@/Components/NavLink';
import Buttons from '@/Components/Buttons';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Footer from '@/Components/Footer';
import { Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
        <Head title="Donations' List" />
        <div className='mx-20'>
            <header>
                <NavLink></NavLink>
            </header>
            <main>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-black-550 uppercase bg-gray-50">
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
                                <tr className="bg-white border-b00">
                                    <td className="px-6 py-2">
                                        <a href="#" className="font-medium text-sapin-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
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
            <Buttons></Buttons>
            <Footer></Footer>
        </div>
        </>
    );
}
