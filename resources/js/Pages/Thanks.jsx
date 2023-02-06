import React from 'react';
import Donation from '@/Components/Donation';
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
// import Footer from '@/Components/Footer';
import { Head, useForm } from '@inertiajs/react';

export default function Thanks(props) {
    return (
        <>
            <Head title="Thank you" />
            <div className='mx-20'>
                <NavLink auth={props.auth}></NavLink>
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <p className="text-center mt-20">Thank you for taking the time to schedule a time with our team ! We will contact you in due time with the informations you have provided.</p>
                </div>
            </div>
        </>
    );
}
