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

    const shoutout = () => {
        switch (props.shoutout) {
            case "Yes - shout out my Nookazon account":
                return "Yes - Nookazon"
            case "Yes - shout out my Discord account":
                return "Yes - Discord"
            default:
                return "No"
        }
    }
    const status = () => {
        // console.log("read")
        switch (data.status) {
            case "Pending pick up":
                return "bg-cream-550 truncate ..."
            case "Did Not Respond":
                return "bg-red-575 truncate ..."
            case "Queued for Programs":
                return "bg-purple-550 truncate ..."
            case "Queued for Website":
                return "bg-lightgreen-550 truncate ..."
            case "Queued for Discord":
                return "bg-discord-550 truncate ..."
            case "Donator Contacted":
                return "bg-yellow-550 truncate ..."
            case "Items Collected":
                return "bg-orange-550 truncate ..."
            case "Invalid":
                return "bg-red-575 truncate ..."
            case "Cancelled":
                return "bg-red-575 truncate ..."
            case "Complete":
                return "bg-gris-550 truncate ..."
            default:
                return "bg-white"
        }
    }

    const today = moment(new Date()).format("YYYY-MM-DD");

    const handleStatusChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        console.log(data);
        axios
            .put("/api/donations/" + props.id, {
                status: e.target.value,
            })
            .then((response) => {
                // console.log(response);
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
                {moment(props.timestamp).format("DD-MM-YYYY")}
            </td>
            <td className="">
                <form id={"form" + props.id}>
                    <select name="status" id={"status" + props.id} value={data.status} defaultValue={props.status} className={status()} onChange={handleStatusChange}>
                        <option value="Invalid">Invalid</option>
                        <option value="Did Not Respond">DNR</option>
                        <option value="Donator Contacted">Contacted</option>
                        <option value="Pending pick up">Pending Pickup</option>
                        <option value="Items Collected">Collected</option>
                        <option value="Queued for Website">Scheduled Web</option>
                        <option value="Queued for Discord">Scheduled Discord</option>
                        <option value="Queued for Programs">Scheduled Programs</option>
                        <option value="Completed">Done</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="">No Status</option>
                    </select>
                </form>
            </td>
            <td className="px-6 py-4 truncate ...">
                <form id={"note" + props.id} onSubmit={handleNoteSubmit}>
                    <input type="text" defaultValue={props.notes} className="leading-3" onChange={e => setNote(e.target.value)} />
                </form>
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.platform}
            </td>
            <td className="px-6 text-center py-4 truncate ...">
                {shoutout()}
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
                <a href={props.nookazon_link}>{props.nookazon_username}</a>
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.currencies}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.items}
            </td>
            <td className="px-6 py-4 truncate ...">
                <input type="date" min={today} className={props.schedule_date ? "" : "text-red-500 border-red-500"} defaultValue={props.schedule_date} onChange={handleDateChange}/>
                {/*{moment(props.schedule_date).format('Do MMM. YYYY')}*/}

            </td>
        </tr>

    );

};

// function getInfo() {
//     const donations = axios.get('http://localhost/api/donations');
//     const filtered = donations.filter(([key, val]) => key == 'status', val == 'scheduled_discord' || key == 'status', val == 'scheduled_website' || key == 'status', val == 'scheduled_programs' && key == 'schedule_date', val == '');
//     console.log(filtered);
// };



export default Donation;
