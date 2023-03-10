import React from "react";
import axios from "axios";
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';

const Donation = (props) => {
    const notify = (content) => toast("Copied " + content + " to clipboard");
    // API call to update the status of a donation
    const [data, setData] = React.useState({
        status: props.status,
    });
    const [note, setNote] = React.useState({note: props.notes});
    {/*{moment(props.schedule_date).format('MMMM Do YYYY')}*/}
    const [visibleButton, setVisibleButton] = React.useState(false)
    const [checkbox, setCheckbox] = React.useState(0);

    const shoutout = () => {
        switch (props.shoutout) {
            case "Yes - Shout out my Nookazon account":
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
                return "bg-cream-550 border-[#e5e5e5] py-1 truncate ..."
            case "Did Not Respond":
                return "bg-red-575 border-[#e5e5e5] py-1 truncate ..."
            case "Queued for Programs":
                return "bg-purple-550 border-[#e5e5e5] py-1 truncate ..."
            case "Queued for Website":
                return "bg-lightgreen-550 border-[#e5e5e5] py-1 truncate ..."
            case "Queued for Discord":
                return "bg-discord-550 border-[#e5e5e5] py-1 truncate ..."
            case "Donator Contacted":
                return "bg-yellow-550 border-[#e5e5e5] py-1 truncate ..."
            case "Items Collected":
                return "bg-orange-550 border-[#e5e5e5] py-1 truncate ..."
            case "Invalid":
                return "bg-red-575 border-[#e5e5e5] py-1 truncate ..."
            case "Cancelled":
                return "bg-red-575 border-[#e5e5e5] py-1 truncate ..."
            case "Complete":
                return "bg-gris-550 border-[#e5e5e5] py-1 truncate ..."
            default:
                return "bg-white border-[#e5e5e5] py-1"
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
    function handleNoteBlur (baseNote) {
        if (baseNote === note.note)
        {console.log("Samesie")}
    }
    const doNothing = () => {
        return;
    }
    const handleNoteSubmit = (e) => {
        e.preventDefault()
        document.activeElement.blur()
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
    async function idClick() {
        await navigator.clipboard.writeText(props.discord_id);
        await notify(props.discord_username + "'s ID ");
    }
    return (
        <tr className={checkbox ? "bg-[#fffbab] border-b leading-tight" : "bg-white border-b leading-tight"}>
            <td className="pl-6">
                {/*<a href="#" className="font-medium text-lightgreen-500 hover:underline">*/}
                {/*    <i className="fa-solid fa-pen-to-square"></i>*/}
                {/*</a>*/}
                <input type="checkbox" tabIndex="-1" id={"checkbox"+props.id} onChange={e => setCheckbox(!checkbox)}/>
            </td>
            <td className="pr-6 truncate ...">
                {moment(props.timestamp).format("DD-MM-YYYY")}
            </td>
            <td className="">
                <form id={"form" + props.id}>
                    <select name="status" tabIndex="-1" id={"status" + props.id} value={data.status} defaultValue={props.status} className={status()} onChange={handleStatusChange}>
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
                        <option value=""></option>
                    </select>
                </form>
            </td>
            <td className="px-6 truncate ...">
                <input type="date" tabIndex="-1" min={today} className={props.schedule_date ? "py-1 border-[#e5e5e5]" : "text-red-500 border-[#FED3CD] py-1"} defaultValue={props.schedule_date} onChange={handleDateChange}/>
                {/*{moment(props.schedule_date).format('Do MMM. YYYY')}*/}
            </td>
            <td className="pl-6 truncate ...">
                <form id={"note" + props.id} onSubmit={handleNoteSubmit} className="flex flex-row">
                    <input type="text" defaultValue={props.notes} className="leading-3 border-[#e5e5e5] py-1" onChange={e => setNote(e.target.value)} onBlur={props.notes === note.note ? () => console.log("If you see this, you are too curious.") : handleNoteSubmit}/>
                </form>
            </td>
            <td className="px-6 truncate ...">
                {props.platform == "Nookazon Programs (i.e. Streams, Contests, etc.)" ? "Nookazon Programs" : props.platform}
            </td>
            <td className="px-6 text-center truncate ...">
                {shoutout()}
            </td>
            <td className="px-6 truncate ...">
                {props.contact_method}
            </td>
            <td className="px-6 truncate max-w-[215px] hover:max-w-[5000px] ...">
                {props.discord_username}
            </td>
            <td className="px-6 truncate max-w-[215px] hover:max-w-[5000px] hover:cursor-pointer ..." onClick={idClick}>
                {props.discord_id}
            </td>
            <td className="px-6 truncate ...">
                <a href={props.nookazon_link} tabIndex="-1">{props.nookazon_username}</a>
            </td>
            <td className="px-6 truncate max-w-[250px] hover:max-w-[5000px] ...">
                {props.currencies}
            </td>
            <td className="px-6 truncate max-w-[250px] hover:max-w-[5000px] ...">
                {props.items}
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
