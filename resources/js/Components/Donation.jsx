import React from 'react';

export default function Donation({donations}) {
    return (
    <tr className="bg-white border-b">
        <td className="px-6 py-2">
            <a href="#" className="font-medium text-lightgreen-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.timestamp}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.status}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.notes}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.schedule_date}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.platform}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.contact_method}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.discord_username}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.discord_id}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.currencies}
        </td>
        <td className="px-6 py-4 truncate ...">
            {donations.items}
        </td>
    </tr>
    );
}
