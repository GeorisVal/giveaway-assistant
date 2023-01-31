    import React, { Fragment, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Dialog, Transition } from "@headlessui/react";

const Calendar = (props) => {
    const next = props.isNext;
    const [currentDate, setCurrentDate] = useState(!next ? new Date() : new Date( Date.now() + 28 * 24 * 60 * 60 * 1000));
    console.log(currentDate);
    const [dayClicked, setDayClicked] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [dayValue, setDayValue] = useState({
        day: null,
        month: null,
        year: null,
    });
    const [appointments, setAppointments] = useState(props.appointments);
    console.log(appointments);
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

    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

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
    const monthName = monthNames[currentDate.getMonth()] ;
    const dayName = dayNames[currentDate.getDay()];

    let logicalMonth = monthNames[currentDate.getMonth()-1] ? monthNames[currentDate.getMonth()-1] : monthNames[currentDate.getMonth()+11];
    console.log(logicalMonth + " " + monthName);

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            nookazon_username: e.target.nookazon_username.value,
            discord_username: e.target.discord_username.value,
            appointment_date: moment([dayValue["day"], dayValue["month"], dayValue["year"]], "DD-MM-YYYY").format("YYYY-MM-DD"),
            appointment_time: e.target.appointment_time.value,
            contact_method: e.target.contact_method.value,
            email: e.target.email.value,
            appointment_type: "donor"
        };
        console.log(data);
        axios.post("/api/appointments", data).then((res) => {
            setAppointments(res.data[0]);
        });
        setDayClicked(false);
    }

    return (
        <div className="mx-auto max-w-7xl mb-5">
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
            <table className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-7">
                {days.map((day, index) => (
                    <td
                        className={
                            (day === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() ===
                                new Date().getFullYear()
                                ? "border-lightgreen-500"
                                : "border-sapin-500") +
                            " w-full h-32 border-2 cursor-pointer rounded-lg mx-auto bg-stone-200"
                        }
                        key={index}
                        defaultValue={day}
                        onClick={() => {
                            setDayValue({
                                day: day,
                                month: currentDate.getMonth() + 1,
                                year: currentDate.getFullYear(),
                            });
                            console.log(dayValue);
                            setDayClicked(true);
                        }}
                    >
                        <div className="flex gap-2 items-center justify-center">
                            <h4 className="text-sm text-sapin-500">
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
                            <h1 className="text-lg font-semibold">{day}</h1>
                            <h4 className="text-sm text-sapin-500">
                                {currentDate.getFullYear()}
                            </h4>
                        </div>
                        <hr
                            className={
                                day === new Date().getDate() &&
                                currentDate.getMonth() ===
                                    new Date().getMonth() &&
                                currentDate.getFullYear() ===
                                    new Date().getFullYear()
                                    ? "border-lightgreen-500 border-1 w-4/5 mx-auto"
                                    : "border-sapin-500 border-1 w-4/5 mx-auto"
                            }
                        />
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
                                        <div
                                            className="flex flex-col gap-2 items-center justify-center"
                                            key={index}
                                        >
                                            <h1 className="text-sm text-gray-500">
                                                {moment(appointment.appointment_time, 'HH:mm:ss').format("HH:mm") + " " + appointment.nookazon_username}
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
                    <div className="min-h-screen px-4 text-center bg-sapin-500 bg-opacity-60">
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
                                            Time for the
                                            exchange
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
        </div>
    );
};

export default Calendar;
