import React, { Fragment, useState } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

const Calendar = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dayClicked, setDayClicked] = useState(false);
    const [dayValue, setDayValue] = useState({
        day: null,
        month: null,
        year: null,
    });
    const [hour, setHour] = useState("13:30");
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

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            nookazon_username: e.target.nookazon_username.value,
            discord_username: e.target.discord_username.value,
            appointment_date: e.target.appointment_date.value,
            appointment_time: e.target.appointment_time.value,
            contact_method: e.target.contact_method.value,
            email: e.target.email.value,
        };
        axios.post("/api/appointments", data).then((res) => {
            setAppointments(res.data[0]);
        });
        setDayClicked(false);
    }

    return (
        <div className="mx-auto max-w-7xl">
            <div className="flex flex-row justify-between w-full my-4">
                <div className="flex flex-row gap-4">
                    <button
                        className="
                    bg-[#66a2e2] text-white rounded-lg w-24 py-2
                    "
                        onClick={prevMonth}
                    >
                        Previous
                    </button>
                    <button
                        className="
                    bg-[#66a2e2] text-white rounded-lg w-24 py-2
                    "
                        onClick={nextMonth}
                    >
                        Next
                    </button>
                </div>
                <h1>
                    {monthName} {currentDate.getFullYear()}
                </h1>
            </div>

            <div className="grid grid-cols-5 gap-4">
                {days.map((day, index) => (
                    <div
                        className={
                            (day === new Date().getDate() &&
                            currentDate.getMonth() === new Date().getMonth() &&
                            currentDate.getFullYear() ===
                                new Date().getFullYear()
                                ? "border-[#66a2e2]"
                                : "border-[#dee2e6]") +
                            " w-full h-32 border-2 cursor-pointer rounded-lg mx-auto bg-[#1f2937]"
                        }
                        key={index}
                        defaultValue={day}
                        onClick={() => {
                            setDayValue({
                                day: day,
                                month: currentDate.getMonth() + 1,
                                year: currentDate.getFullYear(),
                            });
                            setDayClicked(true);
                        }}
                    >
                        <div className="flex gap-2 items-center justify-center">
                            <h4 className="text-sm text-gray-400">
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
                            <h4 className="text-sm text-gray-400">
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
                                    ? "border-[#66a2e2] border-1 w-4/5 mx-auto"
                                    : "border-[#dee2e6] border-1 w-4/5 mx-auto"
                            }
                        />
                        {props.auth.user != null &&
                            appointments.map((techTalk, index) => {
                                if (
                                    techTalk.appointment_date ===
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
                                            <h1 className="text-sm text-gray-400">
                                                {techTalk.appointment_time}{" "}
                                                {techTalk.nookazon_username}
                                            </h1>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                ))}
            </div>
            <Transition appear show={dayClicked} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={setDayClicked}
                >
                    <div className="min-h-screen px-4 text-center bg-black bg-opacity-40">
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
                            <div className=" inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-[#373f50] shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-white"
                                >
                                    Create a tech-talk
                                </Dialog.Title>
                                <div className="mt-2">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Nookazon Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Username"
                                                name="nookazon_username"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                htmlFor="username"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Discord Username
                                            </label>
                                            <input
                                                type="text"
                                                id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="Username"
                                                name="discord_username"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label
                                                for="email"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                email (optional)
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                placeholder="email"
                                                name="appointment_email"
                                            />
                                        </div>
                                        <p className="block mb-2 text-sm font-medium text-gray-900">
                                            Preferred date & time for the
                                            exchange
                                        </p>
                                        <div className="flex flex-row justify-between">
                                            <div className="mb-6 w-full mr-2">
                                                <label
                                                    htmlFor="date"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                ></label>
                                                <input
                                                    type="date"
                                                    id="date"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                    placeholder=""
                                                    required
                                                    name="appointment_date"
                                                />
                                            </div>
                                            <div className="mb-6 w-full mr-2">
                                                <label
                                                    htmlFor="time"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                ></label>
                                                <input
                                                    type="time"
                                                    id="time"
                                                    min="13:00"
                                                    max="21:30"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.50y-600r-gray-400-blue-500er-blue-500"
                                                    placeholder=""
                                                    required
                                                    name="appointment_time"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <p className="block mb-2 text-sm font-medium text-gray-900">
                                                Preferred way to be contacted
                                            </p>
                                            <div className="flex flex-col">
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="discord"
                                                        value="Discord"
                                                        name="contact_method"
                                                    />
                                                    <label
                                                        htmlFor="discord"
                                                        className="pl-2"
                                                    >
                                                        Discord
                                                    </label>
                                                </div>
                                                <div>
                                                    <input
                                                        type="radio"
                                                        id="website"
                                                        value="Website"
                                                    />
                                                    <label
                                                        htmlFor="website"
                                                        className="pl-2"
                                                    >
                                                        Website
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white bg-sapin-500 hover:bg-lightgreen-500 hover:text-sapin-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center0lue-700-blue-800"
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
