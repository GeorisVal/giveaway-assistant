import React from 'react';
import axios from 'axios';

export default function Donation({timestamp, status, notes, schedule_date, platform, shoutout, contact_method, discord_username, discord_id, items, currencies, nookazon_username, nookazon_link, id}) {
    return (
    <tr className="bg-white border-b leading-tight">
        <td className="px-6 py-2">
            <a href="#" className="font-medium text-lightgreen-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
        </td>
        <td className="px-6 py-4 truncate ...">
            {timestamp}
        </td>
        <td className="px-6 py-4 truncate ...">
            <select name="status" id={"status"+id} value={status} className="leading-3">
                <option value="invalid">Invalid</option>
                <option value="dnr">DNR</option>
                <option value="contacted">Contacted</option>
                <option value="pending_pickup">Pending Pickup</option>
                <option value="collected">Collected</option>
                <option value="scheduled_web">Scheduled Web</option>
                <option value="scheduled_discord">Scheduled Discord</option>
                <option value="scheduled_programs">Scheduled Programs</option>
                <option value="done">Done</option>
                <option value="cancelled">Cancelled</option>
            </select>
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
