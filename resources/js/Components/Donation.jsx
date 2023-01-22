import React from "react";
import axios from "axios";
import moment from 'moment';

const Donation = (props) => {
    // API call to update the status of a donation
    const [data, setData] = React.useState({
        status: props.status,
    });
    const [note, setNote] = React.useState({note: props.notes});
    {/*{moment(props.schedule_date).format('MMMM Do YYYY')}*/}

    const [checkbox, setCheckbox] = React.useState(0);

    const handleStatusChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        axios
            .put("/api/donations/" + props.id, {
                status: e.target.value,
            })
            .then((response) => {
                console.log(response);
            });
    };
    const handleNoteSubmit = (e) => {
        e.preventDefault()
        axios
            .put("/api/donations/" + props.id, {
                notes: note,
            })
            .then((response) => {
                console.log(response);
            });
    };
    const handleDateChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        axios
            .put("/api/donations/" + props.id, {
                schedule_date: e.target.value,
            })
            .then((response) => {
                console.log(response);
            });
    };
    return (
        <tr className={checkbox ? "bg-yellow-300 border-b leading-tight" : "bg-white border-b leading-tight"}>
            <td className="px-6 py-2">
                {/*<a href="#" className="font-medium text-lightgreen-500 hover:underline">*/}
                {/*    <i className="fa-solid fa-pen-to-square"></i>*/}
                {/*</a>*/}
                <input type="checkbox" id={"checkbox"+props.id} onChange={e => setCheckbox(!checkbox)}/>
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.timestamp}
            </td>
            <td className="px-6 py-4 truncate ...">
                <form id={"form" + props.id}>
                    <select name="status" id={"status" + props.id} value={data.status} defaultValue={props.status} className="leading-3" onChange={handleStatusChange}>
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
                <form id={"note" + props.id} onSubmit={handleNoteSubmit}>
                    <input type="text" defaultValue={props.notes} className="leading-3" onChange={e => setNote(e.target.value)} />
                </form>
            </td>
            <td className="px-6 py-4 truncate ...">
                <input type="date" defaultValue={props.schedule_date} onChange={handleDateChange}/>
                {/*{moment(props.schedule_date).format('Do MMM. YYYY')}*/}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.platform}
            </td>
            <td className="px-6 text-center py-4 truncate ...">
                {props.shoutout ? 'Yes' : 'No'}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.contact_method}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.discord_username}
            </td>
            <td className="px-6 py-4 truncate ...">
                <a href={"https://discord.com/channels/@me/339868596589035527"}> {props.discord_id}</a>
            </td>
            <td className="px-6 py-4 truncate ...">
                <a href={props.nookazon_link}>{props.nookazon_username}</a>
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.currencies}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.items}
            </td>
        </tr>
    );
};

export default Donation;
