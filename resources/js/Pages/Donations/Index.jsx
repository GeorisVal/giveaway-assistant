import React from 'react';
import Donation from '@/Components/Donation';
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
import Footer from '@/Components/Footer';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ donations }) {
    console.log(donations);
    return (
        <>
        <div className='mx-20'>
        <NavLink></NavLink>
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
                        Shoutout ?
                    </th>
                    <th scope="col" className="px-6 py-3 truncate ...">
                        Contact Method
                    </th>
                    <th scope="col" className="px-6 py-3 truncate ...">
                        Discord username
                    </th>
                    <th scope="col" className="px-6 py-3 truncate ...">
                        Discord ID
                    </th>
                    <th scope="col" className="px-6 py-3 truncate ...">
                        Nookazon username
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
                    <Donation key={donation.id} id={donation.id} timestamp={donation.timestamp} status={donation.status} notes={donation.notes} schedule_date={donation.schedule_date} platform={donation.platform} shoutout={donation.shoutout} contact_method={donation.contact_method} discord_username={donation.discord_username} discord_id={donation.discord_id} nookazon_username={donation.nookazon_username} nookazon_link={donation.nookazon_link} currencies={donation.currencies} items={donation.items} />)};
                </tbody>
            </table>
        </div>
        <Buttons></Buttons>
        <Footer></Footer>
        </div>
        </>
    );
}
