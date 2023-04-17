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
            <Head title="Account pending" />
            <div className='mx-15'>
                <NavLink auth={props.auth}></NavLink>
                <div className="mt-20 flex flex-col w-full mx-auto items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-550">Account pending</h5>
                    <p className="font-normal text-black-550">Before being able to see anything here, please understand that you need to be manually verified. Please reach out to Idris if you'd like to be verified.</p>
                </div>
            </div>
        </>
    );
}
