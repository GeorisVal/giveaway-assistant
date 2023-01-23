import React from 'react';
import Appointment from '@/Components/Appointment';
import NavLink from '@/Components/NavLink'
import Buttons from '@/Components/Buttons';
import Footer from '@/Components/Footer';
import { useForm, Head } from '@inertiajs/react';

export default function Index({ appointments }) {
    return (
        <>
            <Head title="Appointments List" />
            <div className='mx-20'>
                <NavLink></NavLink>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-black-550 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Nookazon username
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Discord username
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Meeting time
                            </th>
                            <th scope="col" className="px-6 py-3 truncate ...">
                                Contact via
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {appointments.map((appointment) =>
                            <Appointment key={appointment.id} id={appointment.id} date={appointment.appointment_date} time={appointment.appointment_time} nookazon_username={appointment.nookazon_username} discord_username={appointment.discord_username} contact={appointment.contact_method} type={appointment.appointment_type}/>)}
                        </tbody>
                    </table>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
