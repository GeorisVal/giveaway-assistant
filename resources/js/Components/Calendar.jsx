import React, {Fragment, useState} from "react";
import axios from "axios";
import moment from "moment";
import {Dialog, Transition} from "@headlessui/react";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calendar = (props) => {
    const next = props.isNext;
    const [copy, setCopy] = useState("")
    const notify = (content) => toast("Copied " + content + " to clipboard");
    const [currentDate, setCurrentDate] = useState(
        !next ? new Date() : new Date(Date.now() + 28 * 24 * 60 * 60 * 1000)
    );
    const [dayValue, setDayValue] = useState({
        day: null,
        month: null,
        year: null,
    });
    const [dayClicked, setDayClicked] = useState(false);
    const [shiftDayClicked, setShiftDayClicked] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [indes, setIndes] = useState();
    const [formState, setFormState] = useState({
        title: "title",
        imglink: "",
        description: "",
        status: "",
        shoutout: "",
        items: "",
        scheduled_date: "",
        discord_username: "",
        discord_id: "",
        nookazon_username: "",
        nookazon_link: "",
        formatted_shoutout: "",
        currencies: ""
    })
    // useEffect(() => {
    //     const timer = mouseOver && setTimeout(onTimeout, 500);
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, mouseOver)
    function formatShoutout(shoutout, nookname, nooklink, discname, discid) {
        switch (shoutout) {
            case "Yes - Shout out my Nookazon account":
                return nookname + " (" + nooklink + ")"
            case "Yes - Shout out my Discord account":
                return discname + " (<@" + discid + ">)"
            default:
                return "Anonymous Donor"
        }

    }
    function calendarCaseColor (platform) {
        switch (platform) {
            case "Nookazon Discord":
                return "bg-[#d7ddf5]";
            case "Nookazon Website":
                return "bg-[#d8f2df]";
            case "Nookazon Programs (i.e. Streams, Contests, etc.)":
                return "bg-[#fbecdd]"
        }
    }

    function isDiscord (entry) {
        let string = entry.toString();
        return string.includes("Discord")
    }

    async function shoutoutClick() {
        await navigator.clipboard.writeText(formState.formatted_shoutout);
        await notify("shoutout");
    }
    async function itemsClick() {
        await navigator.clipboard.writeText(formState.items);
        await notify("items");
    }
    async function CurrenciesClick() {
        await navigator.clipboard.writeText(formState.currencies);
        await notify("NMT/Bells");
    }
    async function messageClick() {
        await navigator.clipboard.writeText("Shout out to " + formState.formatted_shoutout + " for sponsoring this giveaway! \n\n Winner will be contacted by <@339868596589035527> once rolled! \n\n <@&709538031459237968> By entering our giveaway, you are agreeing to the giveaway terms found here: https://bit.ly/NookazonSweepstakes \n\n To be notified (or stop receiving notifications) of future giveaways head on over to <#698965706254974987> and press the 📆! \n\n > *🎁 Interested in sponsoring a giveaway? Please fill out the form linked in <#698965706254974987>*")
        await notify("Discord copypasta")
    }

    function clickHandler(e, day) {
        if (props.auth.user != null) {
            const clickedDay = {
                day: day,
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
            };
            const clickedDayFormatted = moment([clickedDay.day, clickedDay.month, clickedDay.year], "DD-MM-YYYY").format("YYYY-MM-DD");
            setDayValue(clickedDayFormatted);
            // const index = donations.map(donation => donation.schedule_date).indexOf(moment([clickedDay["day"], clickedDay["month"], clickedDay["year"]], "DD-MM-YYYY").format("YYYY-MM-DD"));
            const results = donations.filter(function (donation) {return donation.schedule_date == clickedDayFormatted;});
            if (results.length === 0) {
                return
            }
            setShiftDayClicked(true);
            let items = [];
            let shoutout = [];
            let currencies = [];
            let discord_username = [];
            let discord_id = [];
            let nookazon_username = [];
            let nookazon_link = [];
            let shoutout_formatted = [];
            let status = [];
            Object.keys(results).forEach(key => {
                items.push(results[key].items);
                shoutout.push(results[key].shoutout);
                currencies.push(results[key].currencies);
                discord_username.push(results[key].discord_username);
                discord_id.push(results[key].discord_id);
                nookazon_username.push(results[key].nookazon_username);
                nookazon_link.push(results[key].nookazon_link);
                shoutout_formatted.push(formatShoutout(results[key].shoutout, results[key].nookazon_username, results[key].nookazon_link, results[key].discord_username, results[key].discord_id));
                status.push(results[key].status)
            })
            // donations.map((donation) => {
            setFormState({
                scheduled_date: results[0].schedule_date,
                title: results[0].title,
                imglink: results[0].img_link,
                shoutout: shoutout,
                description: results[0].description,
                items: items.join(', '),
                discord_username: discord_username,
                discord_id: discord_id,
                nookazon_username: nookazon_username,
                nookazon_link: nookazon_link,
                currencies: currencies.join(', '),
                formatted_shoutout: shoutout_formatted.join(" and "),
                status: results[0].status
            });
            // setShiftDayClicked(true);
            //console.log(donations[index].schedule_date);
        }
        else if(e.ctrlKey) {
            setDayValue({
                day: day,
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
            });
            console.log(dayValue);
            setDayClicked(true);
        }
        else {
            setDayValue({
                day: day,
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
            });
            console.log(dayValue);
            setDayClicked(true);
        }
    }
    function onHover (index) {
        setMouseOver(!mouseOver);
        setIndes(index);
        // console.log(mouseOver ? "You're in" + " " + index : "You're out" + " " + index);
    }
    const [appointments, setAppointments] = useState(props.appointments);
    const donations = props.donations;
    // console.log(donations);
    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.setMonth(currentDate.getMonth() + 1))
        );
    };
    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.setMonth(currentDate.getMonth() - 1))
        );
    };

    const daysInMonth = () => {
        return new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        ).getDate();
    };

    const days = [];
    for (let i = 1; i <= daysInMonth(); i++) {
        days.push(i);
    }

    // const temp = () => {
    //     let newDays = {}
    //     let newDaysArray = []
    //     days.map((day) => (donations.map((donation) => {
    //         let currentDay = `${currentDate.getFullYear()}-${currentDate.getMonth().toString().length == 1 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth()}-${day.toString().length == 1 ? "0" + day : day}`;
    //         if (donation.schedule_date === currentDay) {
    //             //newDaysArray.push(currentDay + " " + donation.status)
    //             newDays.date = currentDay;
    //             newDays.status = donation.status;
    //             newDaysArray.push(newDays);
    //         }
    //         })))
    //     return newDaysArray;
    // }

    // const tempDate = (hey) => { temp().filter(x => x.includes(hey)) }
    // console.log(tempDate.toString().split(" "))
    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthName = monthNames[currentDate.getMonth()];
    const dayName = dayNames[currentDate.getDay()];

    let logicalMonth = monthNames[currentDate.getMonth() - 1]
        ? monthNames[currentDate.getMonth() - 1]
        : monthNames[currentDate.getMonth() + 11];
    function handleScheduleSubmit(e) {
        e.preventDefault();
        const data = {
            title: e.target.giveaway_title.value,
            img_link: e.target.giveaway_img_link.value,
            description: e.target.giveaway_description.value,
            schedule_date: e.target.giveaway_scheduled_date.value,
            status: e.target.giveaway_status.value === "Scheduled" ? formState.status : e.target.giveaway_status.value
        }
        console.log(data.status);
        axios
            .put("/api/calendar/details/" + dayValue, data)
            .then((res) => {console.log(res)});
        setShiftDayClicked(false);
    }


    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            nookazon_username: e.target.nookazon_username.value,
            discord_username: e.target.discord_username.value,
            appointment_date: moment(
                [dayValue["day"], dayValue["month"], dayValue["year"]],
                "DD-MM-YYYY"
            ).format("YYYY-MM-DD"),
            appointment_time: e.target.appointment_time.value,
            contact_method: e.target.contact_method.value,
            email: e.target.email.value,
            appointment_type: "donor",
        };
        axios.post("/api/appointments", data).then((res) => {
            setAppointments(res.data[0]);
        });
        setDayClicked(false);
        location.href = '/thanks';
    }
    return (
        <div className="mx-auto max-w-7xl mb-5 bg-gray-100">
            <div className="flex justify-evenly w-full my-4">
                <div className="flex flex-row gap-4">
                    <button
                        className="bg-sapin-500 text-lightgreen-500 rounded-lg w-24 py-2 hover:bg-lightgreen-500 hover:text-sapin-500"
                        onClick={prevMonth}
                    >
                        Previous
                    </button>
                    <h1 className="text-sapin-500 p-2 font-bold">
                        {monthName} {currentDate.getFullYear()}
                    </h1>
                    <button
                        className="bg-sapin-500 text-lightgreen-500 rounded-lg w-24 py-2 hover:bg-lightgreen-500 hover:text-sapin-500"
                        onClick={nextMonth}
                    >
                        Next
                    </button>
                </div>
            </div>
            <table className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-7">
                {days.map((day, index) => (
                    <td
                        className={
                            (day === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() ===
                                new Date().getFullYear()
                                ? "border-red-500"
                                : "border-sapin-500") +
                            " relative w-full h-32 border-2 cursor-pointer rounded-lg mx-auto bg-white"
                        }
                        key={index}

                        defaultValue={day}
                        onMouseEnter={() => {
                            onHover(index)
                        }}
                        onMouseLeave={() => {
                            onHover(index)
                        }}
                        onClick={(event) => {clickHandler(event, day)}}
                    >
                        {props.auth.user != null &&
                            donations.map((donation, index) => {
                                if (donation.schedule_date ===
                                    `${currentDate.getFullYear()}-${currentDate.getMonth().toString().length == 1
                                        ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth()}-${day.toString().length == 1 ? "0" + day : day}`)
                                    {
                                    return (
                                        <div className={calendarCaseColor(donation.platform) + " rounded-lg h-[99%] w-[99%] absolute"} key={index}>
                                        </div>
                                    );
                                    }
                            })}
                        {props.auth.user != null &&
                            appointments.map((appointment, index) => {
                                if (
                                    appointment.appointment_date ===
                                    `${currentDate.getFullYear()}-${
                                        currentDate.getMonth().toString()
                                            .length == 1
                                            ? "0" + (currentDate.getMonth() + 1)
                                            : currentDate.getMonth()
                                    }-${
                                        day.toString().length == 1
                                            ? "0" + day
                                            : day
                                    }`
                                ) {
                                    return (
                                        <div className="absolute mt-2 ml-3 flex flex-row" key={index}>
                                            <div
                                                className={
                                                    appointment.appointment_type == "donor"
                                                        ? "bg-donatorblue-500 rounded-full w-3 h-3"
                                                        : "hidden"
                                                }
                                            ></div>
                                            <div
                                                className={
                                                    appointment.appointment_type ==
                                                    "winner"
                                                        ? "bg-recevorgreen-500 rounded-full w-3 h-3 ml-3"
                                                        : "hidden"
                                                }
                                            ></div>
                                        </div>
                                    );
                                }
                            })}
                        {/*{mouseOver == true && indes == index && <div className="absolute w-full h-full" key={index}><p>Test</p></div>}*/}
                        <div className="flex absolute top-0.5 right-0 gap-2 items-center justify-end mr-5">
                            <h4 className="text-lg font-semibold text-sapin-500">
                                {new Date(
                                    currentDate.getFullYear(),
                                    currentDate.getMonth(),
                                    day
                                )
                                    .toLocaleString("en-us", {
                                        weekday: "long",
                                    })
                                    .slice(0, 3)}
                            </h4>
                            <h1 className="text-lg font-semibold text-gray-500">
                                {day}
                            </h1>
                            {/*
                            <h4 className="text-sm text-sapin-500">
                                {currentDate.getFullYear()}
                            </h4>
                            */}
                        </div>
                        <hr
                            className={
                                (day === new Date().getDate() &&
                                currentDate.getMonth() ===
                                    new Date().getMonth() &&
                                currentDate.getFullYear() ===
                                    new Date().getFullYear()
                                    ? "border-lightgreen-500"
                                    : "border-sapin-500") + " border-1 absolute top-7 left-0 right-0 w-4/5 mx-auto"
                            }
                        />
                        {props.auth.user != null && mouseOver == true && indes == index &&
                            appointments.map((appointment, index) => {
                                if (
                                    appointment.appointment_date ===
                                    `${currentDate.getFullYear()}-${
                                        currentDate.getMonth().toString()
                                            .length == 1
                                            ? "0" + (currentDate.getMonth() + 1)
                                            : currentDate.getMonth()
                                    }-${
                                        day.toString().length == 1
                                            ? "0" + day
                                            : day
                                    }`
                                ) {
                                    return (
                                        <div className="flex flex-col gap-2 items-center justify-center text-center p-1 absolute left-0 right-0 top-8" key={index}>
                                            <h1
                                                className={
                                                    appointment.contact_method ==
                                                    "Discord"
                                                        ? "bg-blurple-500 text-sm text-gray-500 p-1 text-center"
                                                        : "bg-pastelgreen-500 text-sm text-gray-500 p-1"
                                                }
                                            >
                                                {appointment.nookazon_username
                                                    ? moment(
                                                        appointment.appointment_time,
                                                            "HH:mm:ss"
                                                    ).format("HH:mm") +
                                                    " " +
                                                    appointment.nookazon_username
                                                    : moment(
                                                        appointment.appointment_time,
                                                        "HH:mm:ss"
                                                    ).format("HH:mm") +
                                                    " " +
                                                    appointment.discord_username}
                                            </h1>
                                        </div>
                                    );
                                }
                            })}
                    </td>
                ))}
            </table>
            <Transition appear show={dayClicked} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={setDayClicked}
                >
                    <div className="min-h-screen px-4 text-center bg-gray-500 bg-opacity-60">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-300 shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-bold leading-6 text-sapin-500 text-center p-2"
                                >
                                    Create an appointment
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                Nookazon Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Username"
                                                name="nookazon_username"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                Discord Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Username"
                                                name="discord_username"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                for="email"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                email (optional)
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="email"
                                                name="appointment_email"
                                            />
                                        </div>
                                        <p className="block mb-1 text-base font-semibold text-sapin-500">
                                            Time for the exchange
                                        </p>
                                        <div className="flex flex-row justify-between">
                                            <div className="mb-6 w-full mr-2">
                                                <label
                                                    htmlFor="time"
                                                    className="block mb-2 text-base font-semibold text-gray-500"
                                                ></label>
                                                <input
                                                    type="time"
                                                    id="time"
                                                    min="13:00"
                                                    max="21:30"
                                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                    placeholder=""
                                                    required
                                                    name="appointment_time"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <p className="block mb-2 text-base font-semibold text-sapin-500">
                                                Preferred way to be contacted
                                            </p>
                                            <div className="flex flex-col">
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="discord"
                                                        value="Discord"
                                                        name="contact_method"
                                                        className="hover:bg-lightgreen-500"
                                                    />
                                                    <label
                                                        htmlFor="discord"
                                                        className="pl-2 text-gray-500"
                                                    >
                                                        Discord
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="website"
                                                        value="Website"
                                                        name="contact_method"
                                                        className="hover:bg-lightgreen-500"
                                                    />
                                                    <label
                                                        htmlFor="website"
                                                        className="pl-2 text-gray-500"
                                                    >
                                                        Website
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            <Transition appear show={shiftDayClicked} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={setShiftDayClicked}
                >
                    <div className="min-h-screen px-4 text-center bg-gray-500 bg-opacity-60">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className="mt-2">
                                    <ToastContainer autoClose={1000} position={"top-center"}/>
                                    <form onSubmit={handleScheduleSubmit}>
                                        <div className="mb-6">
                                            <input type="text"
                                                   id="giveaway-title"
                                                   className="text-xl border-white w-full font-bold leading-6 text-sapin-500 text-center p-2"
                                                   defaultValue={!formState.title ? "Giveaway Title" : formState.title}
                                                   name="giveaway_title"
                                                   />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="giveaway_img_link"
                                                className="block mb-2 text-base font-semibold text-sapin-500 bg-white"
                                            >
                                                Image Link
                                            </label>
                                            <input
                                                type="text"
                                                id="giveaway_img_link"
                                                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Image link..."
                                                name="giveaway_img_link"
                                                defaultValue={formState.imglink}
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="giveaway_description"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                Giveaway Description
                                            </label>
                                            <textarea
                                                id="giveaway_description"
                                                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Giveaway description..."
                                                name="giveaway_description"
                                                defaultValue={formState.description}
                                            />
                                        </div>
                                        <div className="mb-6 text-center">
                                            <h4 className="block mb-2 text-base font-semibold text-sapin-500">Shoutout</h4>
                                            <p className="whitespace-pre overflow-hidden cursor-pointer" onClick={shoutoutClick}>{formState.formatted_shoutout}</p>
                                        </div>
                                        <div className="mb-6">
                                            <table>
                                                <tr>
                                                    <th className="w-[50%] mb-2 text-base font-semibold text-center text-sapin-500">Items</th>
                                                    <th className="w-[50%] mb-2 text-base font-semibold text-center text-sapin-500">NMT/Bells</th>
                                                </tr>
                                                <tr>
                                                    <td className="text-center cursor-pointer" onClick={itemsClick}>{formState.items}</td>
                                                    <td className="text-center cursor-pointer" onClick={CurrenciesClick}>{formState.currencies}</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="giveaway_scheduled_date"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                Scheduled Date
                                            </label>
                                            <input
                                                type="date"
                                                id="giveaway_scheduled_date"
                                                className="text-center bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                name="giveaway_scheduled_date"
                                                defaultValue={formState.scheduled_date}
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="giveaway_status"
                                                className="block mb-2 text-base font-semibold text-sapin-500"
                                            >
                                                Giveaway Status
                                            </label>
                                            <div className="flex flex-row">
                                                <select
                                                    id="giveaway_status"
                                                    className="text-center bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-sapin-500 focus:border-sapin-500 block w-[15em] p-2.50y-600r-gray-400-blue-500er-blue-500 py-1 ml-[-2px]"
                                                    name="giveaway_status"
                                                    defaultValue={formState.status === "Queued for Programs" || formState.status === "Queued for Discord" || formState.status === "Queued for Website" ? "Scheduled" : formState.status}
                                                    required
                                                >
                                                    <option disabled>Scheduled</option>
                                                    <option>Giveaway Live</option>
                                                    <option>Winner Contacted</option>
                                                    <option>Completed</option>
                                                </select>
                                                <button type="submit" className="ml-6 text-sapin-500 underline text-sm">Change</button>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white bg-lightgreen-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800"
                                        >
                                            Submit
                                        </button>
                                        <span className={!isDiscord(formState.status) ? "hidden" : "" + " text-white bg-lightgreen-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-24 px-5 py-2.5 text-center0lue-700-blue-800 ml-4 cursor-pointer"} onClick={messageClick}>Discord Message</span>
                                        <p>{isDiscord(formState.status)}</p>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Calendar;
