import React from "react";
import axios from "axios";
import moment from 'moment';
import { toast } from 'react-toastify';

const Donation = (props) => {
    const notify = (content) => toast("Copied " + content + " to clipboard");
    // API call to update the status of a donation
    const [data, setData] = React.useState({
        status: props.status,
    });
    const [currencies, setCurrencies] = React.useState({currencies: props.currencies});
    const [editCurrencies, setEditCurrencies] = React.useState(false)
    const [note, setNote] = React.useState({note: props.notes});
    const [items, setItems] = React.useState({items: props.items});
    const [editItems, setEditItems] = React.useState(false);
    {/*{moment(props.schedule_date).format('MMMM Do YYYY')}*/}
    const [visibleButton, setVisibleButton] = React.useState(false)
    const [checkbox, setCheckbox] = React.useState(0);

    const shoutout = () => {
        switch (props.shoutout) {
            case "Yes - Shout out my Nookazon account":
                return "Yes - Nookazon"
            case "Yes - Shout out my Discord account":
                return "Yes - Discord"
            case "No - I would like to remain anonymous":
                return "No"
            default:
                return "Something went wrong"
        }
    }
    const status = () => {
        // console.log("read")
        switch (data.status) {
            case "Pending pick up":
                return "bg-cream-550 border-[#f9fafb] py-1"
            case "Did Not Respond":
                return "bg-red-575 border-[#f9fafb] py-1"
            case "Queued for Programs":
                return "bg-purple-550 border-[#f9fafb] py-1"
            case "Queued for Website":
                return "bg-lightgreen-550 border-[#f9fafb] py-1"
            case "Queued for Discord":
                return "bg-discord-550 border-[#f9fafb] py-1"
            case "Donator Contacted":
                return "bg-yellow-550 border-[#f9fafb] py-1"
            case "Items Collected":
                return "bg-orange-550 border-[#f9fafb] py-1"
            case "Invalid":
                return "bg-red-575 border-[#f9fafb] py-1"
            case "Cancelled":
                return "bg-red-575 border-[#f9fafb] py-1"
            case "Complete":
                return "bg-gris-550 border-[#f9fafb]"
            default:
                return "bg-white border-[#f9fafb]"
        }
    }

    const today = moment(new Date()).format("YYYY-MM-DD");

    const handleItemsChange = (e) => {
        e.preventDefault()
        setEditItems(false)
        setItems({items: items})
        axios
            .put("/api/donations/" + props.id, {
                items: items,
            })
    }
    const handleCurrenciesChange = (e) => {
        setEditCurrencies(false)
        e.preventDefault()
        setCurrencies({currencies: currencies})
        axios
            .put("/api/donations/" + props.id, {
                currencies: currencies,
            })
    }

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

    async function clickHandlerItems(e) {
        if (!props.canEdit) {return}
        if (e.shiftKey) {
            setEditItems(true)
        }
        else {
            await navigator.clipboard.writeText(props.items);
            await notify('"' + props.items + '"');
        }
    }
    async function clickHandlerCurrency(e) {
        if (!props.canEdit) {return}
        if (e.shiftKey) {
            setEditCurrencies(true)
        }
        else {
            await navigator.clipboard.writeText(props.currencies);
            await notify('"' + props.currencies + '"');
        }
    }

    return (
        <tr className={checkbox ? "bg-[#fffbab] border-b leading-tight" : "bg-white border-b leading-tight"}>
            <td className="pl-6 sticky z-10 bg-white left-0">
                {/*<a href="#" className="font-medium text-lightgreen-500 hover:underline">*/}
                {/*    <i className="fa-solid fa-pen-to-square"></i>*/}
                {/*</a>*/}
                <input type="checkbox" tabIndex="-1" id={"checkbox"+props.id} onChange={e => setCheckbox(!checkbox)} disabled={!props.canEdit}/>
            </td>
            <td className="pr-6 truncate z-10 bg-white sticky left-[3rem] ...">
                {moment(props.timestamp).format("DD-MM-YYYY")}
            </td>
            <td className="sticky z-10 left-[9.5rem] bg-white px-2">
                <form id={"form" + props.id}>
                    <select name="status" tabIndex="-1" id={"status" + props.id} value={data.status} defaultValue={props.status} className={status()} onChange={handleStatusChange} disabled={!props.canEdit}>
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
            <td className="sticky z-10 left-[23.2rem] bg-white px-3">
                <input type="date" tabIndex="-1" min={today} className={props.schedule_date ? "py-1 border-[#e5e5e5]" : "text-red-500 border-[#FED3CD] py-1"} defaultValue={props.schedule_date} onChange={handleDateChange} disabled={!props.canEdit}/>
                {/*{moment(props.schedule_date).format('Do MMM. YYYY')}*/}
            </td>
            <td className="pl-6 truncate ...">
                <form id={"note" + props.id} onSubmit={handleNoteSubmit} className="flex flex-row">
                    <input type="text" defaultValue={props.notes} className="leading-3 border-[#e5e5e5] py-1" onChange={e => setNote(e.target.value)} onBlur={props.notes === note.note ? () => console.log("If you see this, you are too curious.") : handleNoteSubmit} disabled={!props.canEdit}/>
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
            <td className="px-6 max-w-[250px] hover:max-w-[5000px] truncate ...">
                <form id={"currencies" + props.id} onSubmit={props.currencies === currencies.currencies ? () => setEditCurrencies(false) : handleCurrenciesChange} className="flex flex-row">
                    {editCurrencies ? <input type="text" autoFocus={true} defaultValue={currencies.currencies} className="leading-3 p-1 border-[#f9fafb]" onChange={e => setCurrencies(e.target.value)} onBlur={props.currencies === currencies.currencies ? () => setEditCurrencies(false) : handleCurrenciesChange}/> : <p className={props.canEdit ? "cursor-pointer" : "cursor-default"} onClick={clickHandlerCurrency}>{currencies.currencies}</p>}
                </form>
            </td>
            <td className="px-6 max-w-[250px] hover:max-w-[5000px] truncate ...">
                <form id={"items" + props.id} onSubmit={props.items === items.items ? () => setEditItems(false) : handleItemsChange} className="flex flex-row">
                    {editItems ? <input type="text" autoFocus={true} defaultValue={items.items} className="leading-3 p-1 border-[#f9fafb] w-auto" onChange={e => setItems(e.target.value)} onBlur={props.items === items.items ? () => setEditItems(false) : handleItemsChange}/> : <p className={props.canEdit ? "cursor-pointer" : "cursor-default"} onClick={clickHandlerItems}>{items.items}</p>}
                </form>
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
