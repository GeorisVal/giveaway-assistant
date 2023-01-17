import React from 'react';

export default function Donation({timestamp, status, notes, schedule_date, platform, shoutout, contact_method, discord_username, discord_id, items, currencies, nookazon_username, nookazon_link}) {
    return (
    <tr className="bg-white border-b">
        <td className="px-6 py-2">
            <a href="#" className="font-medium text-lightgreen-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
        </td>
        <td className="px-6 py-4 truncate ...">
            {timestamp}
        </td>
        <td className="px-6 py-4 truncate ...">
            {status}
        </td>
        <td className="px-6 py-4 truncate ...">
            {notes}
        </td>
        <td className="px-6 py-4 truncate ...">
            {schedule_date}
        </td>
        <td className="px-6 py-4 truncate ...">
            {platform}
        </td>
        <td className="px-6 py-4 truncate ...">
            {contact_method}
        </td>
        <td className="px-6 py-4 truncate ...">
            {discord_username}
        </td>
        <td className="px-6 py-4 truncate ...">
            {discord_id}
        </td>
        <td className="px-6 py-4 truncate ...">
            {currencies}
        </td>
        <td className="px-6 py-4 truncate ...">
            {items}
        </td>
    </tr>
    );
}
