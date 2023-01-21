import React from 'react';
import {useForm, usePage} from '@inertiajs/react'

const Donation = (props) => {
    const {data, setData, put, processing, errors} = useForm({
        id: props.id,
        status: props.status,
    })

    function handleChange(e) {
        setData('status', e.target.value);
        const brutId = e.target.id.replace('status', '');
        console.log(brutId);
    }
    function handleSubmit(e) {
        e.preventDefault()
        put('/donations/'+props.id, props.status)
        console.log(e)
    }
    return (
    <tr className="bg-white border-b leading-tight">
        <td className="px-6 py-2">
            <a href="#" className="font-medium text-lightgreen-500 hover:underline"><i className="fa-solid fa-pen-to-square"></i></a>
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.timestamp}
        </td>
        <td className="px-6 py-4 truncate ...">
            <form id={"form"+props.id} method={"put"} onChange={handleSubmit}>
                <select name="status" id={"status" + props.id} value={data.status} defaultValue={props.status} className="leading-3" errors={errors.status} onChange={handleChange} onSelect={(event) => this.handleSubmit(event)}>
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
            </form>
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.notes}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.schedule_date}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.platform}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.contact_method}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.discord_username}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.discord_id}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.currencies}
        </td>
        <td className="px-6 py-4 truncate ...">
            {props.items}
        </td>
    </tr>
    );
}

export default Donation;
