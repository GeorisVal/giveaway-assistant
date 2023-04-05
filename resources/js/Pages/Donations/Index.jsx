import React from 'react';
import Donation from '@/Components/Donation';
import Filters from '@/Components/StatusList'
import FilterPlatform from "@/Components/PlatformList";
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
// import Footer from '@/Components/Footer';
import { Head, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index( {donations, status, auth, link, platform} ) {
    return (
        <>
            <Head title="Items List" />
        <div className='mx-20'>
            <header>
                <NavLink auth={auth} link={link}></NavLink>
            </header>
            <ToastContainer autoClose={1000} position={"top-center"}/>
            <div className="relative overflow-x-scroll overflow-y-scroll max-h-[78vh] shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black-550 uppercase bg-gray-50 z-20 sticky top-0">
                    <tr>
                    <th scope="col" className="px-6 py-3 bg-gray-50 sticky left-0">

                    </th>
                    <th scope="col" className="px-6 py-3 truncate bg-gray-50 sticky left-[3rem] cursor-default ...">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3 truncate bg-gray-50 cursor-default sticky left-[9.5rem] ...">
                        {auth.user.canEdit ? <Filters status={status}/> : <p className="cursor-not-allowed">status ⇅</p>}
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default text-left...">
                        Notes
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        {auth.user.canEdit ? <FilterPlatform platform={platform}/> : <p className="cursor-not-allowed">platform ⇅</p>}
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Shoutout ?
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Contact
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Discord user
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Discord ID
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Nookazon user
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Bells/NMTs
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Items
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Scheduled date
                    </th>
                    <th scope="col" className="px-6 py-3 truncate cursor-default ...">
                        Split
                    </th>
                </tr>
                </thead>
                <tbody>
                {donations.map((donation) =>
                    <Donation key={donation.id} id={donation.id} timestamp={donation.timestamp} status={donation.status} notes={donation.notes} schedule_date={donation.schedule_date} platform={donation.platform} shoutout={donation.shoutout} contact_method={donation.contact_method} discord_username={donation.discord_username} discord_id={donation.discord_id} nookazon_username={donation.nookazon_username} nookazon_link={donation.nookazon_link} currencies={donation.currencies} items={donation.items} canEdit={auth.user.canEdit}/>)}
                </tbody>
            </table>
        </div>
        <Buttons></Buttons>
        {/* <Footer></Footer> */}
        </div>
        </>
    );
}
