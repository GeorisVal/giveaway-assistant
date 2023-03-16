import React from 'react';
import Donation from '@/Components/DonationNoDate';
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
import { Head, useForm } from '@inertiajs/react';
import Responsive from '@/Components/Responsive';
import FilterPlatform from "@/Components/PlatformList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filters from "@/Components/StatusList";

export default function Index({ donations, platform }) {
    return (
        <>
            <Head title="Scheduled w/o dates" />
            <div className='mx-20'>
                <header>
                    <NavLink auth={{user: "logged"}}></NavLink>
                </header>
                <ToastContainer autoClose={1000} position={"top-center"}/>
                <div className="relative overflow-x-scroll overflow-y-scroll max-h-[68vh] shadow-md sm:rounded-lg">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-black-550 uppercase bg-gray-50 z-20 sticky top-0">
                            <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 sticky left-0">

                            </th>
                            <th scope="col" className="px-6 py-3 truncate bg-gray-50 sticky left-[3rem] cursor-default ...">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[9.5rem] ...">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Scheduled date
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Notes
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                <FilterPlatform platform={platform}/>
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Shoutout ?
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Contact
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Discord user
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Discord ID
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Nookazon user
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Bells/NMTs
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Items
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {donations.map((donation) =>
                            <Donation key={donation.id} id={donation.id} timestamp={donation.timestamp} status={donation.status} notes={donation.notes} schedule_date={donation.schedule_date} platform={donation.platform} shoutout={donation.shoutout} contact_method={donation.contact_method} discord_username={donation.discord_username} discord_id={donation.discord_id} nookazon_username={donation.nookazon_username} nookazon_link={donation.nookazon_link} currencies={donation.currencies} items={donation.items} />)}
                        </tbody>
                    </table>
                    </div>
                    <Buttons></Buttons>
                </div>
                <Responsive />
            </div>
        </>
    );
}
