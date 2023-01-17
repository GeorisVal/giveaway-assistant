import React from 'react';
import Donation from '@/Components/Donation';
import { useForm, Head } from '@inertiajs/react';

export default function Index({Donation}) {
    return (
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
                        Nookazon username
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
                {Donation.map(donation =>
                    <Donation key={donation.id} donation={donation} />)};
                </tbody>
            </table>
        </div>
    );
}
