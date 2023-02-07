import React from 'react';
import Donation from '@/Components/Donation';
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
import { Head } from '@inertiajs/react';
// import Footer from '@/Components/Footer';
import Appointment from "@/Components/Appointment";
import Responsive from '@/Components/Responsive';

export default function Thanks(props) {
    return (
        <>
            <Head title="Thanks" />
            <div className='mx-20'>
                <NavLink auth={props.auth}></NavLink>
                <div className="max-md:hidden mt-20 flex flex-col w-full mx-auto items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-550">Request sent!</h5>
                    <p className="font-normal text-black-550">Thank you for taking the time to schedule a time with our team ! We will contact you in due time with the informations you have provided.</p>
                </div>
            </div>
            <Responsive />
        </>
    );
}
