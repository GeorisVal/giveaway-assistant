import { useForm } from "@inertiajs/react";
import React, {useState, useEffect, Fragment} from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import {Dialog, Transition} from "@headlessui/react";
import {ToastContainer} from "react-toastify";
import axios from "axios";

export default function Split(props) {
    const prop = props.props
    const [data, setData] = useState({
        timestamp: prop.timestamp,
        contact_method: prop.contact_method,
        discord_id: prop.discord_id,
        discord_username: prop.discord_username,
        nookazon_link: prop.nookazon_link,
        nookazon_username: prop.nookazon_username,
        platform: prop.platform,
        shoutout: prop.shoutout,
        items: prop.items,
        currencies: prop.currencies,
        lines: 1
    })
    const handleLineChange = (e) => {
        let newValue = {};
        newValue = {lines: e.target.value};
        setData(lines => ({
            ...lines,
            ...newValue
        }))
    }
    const handleItemsChange = (e) => {
        let newValue = {};
        newValue = {items: e.target.value};
        setData(items => ({
            ...items,
            ...newValue
        }));
    };
    const handleCurrencyChange = (e) => {
        let newValue = {};
        newValue = {currencies: e.target.value};
        setData(currencies => ({
            ...currencies,
            ...newValue
        }));
    };
    const [split, setSplit] = useState(false);
    const toggleSplit = () => {setSplit(!split); console.log(prop)};

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/donations-split", data)
            .then((res) => {console.log(res)});
            setSplit(false);
    }

    return (
        <>
            <p onClick={toggleSplit} className="underline border-green-300 text-l cursor-pointer hover:text-warmpink-500">Split</p>
            <Transition appear show={split} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 overflow-y-auto"
                    onClose={toggleSplit}
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
                                    <h1 className="text-center text-2xl pb-4">Split {prop.contact_method == "Website" ? prop.nookazon_username : prop.discord_username}'s donation</h1>
                                    <h2 className="font-bold">Base NMT/Bells</h2>
                                    <p>{prop.currencies}</p>
                                    <h2 className="font-bold">Base Items</h2>
                                    <p className="pb-4">{prop.items}</p>
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="split_items" className="font-bold">New Items</label><br />
                                        <input type="text" id="split_items" defaultValue={data.items} onChange={(e) => handleItemsChange(e)} className="w-full" />
                                        <br />
                                        <label htmlFor="split_currencies" className="font-bold">NMT/Bells</label> <br />
                                        <input type="text" id="split_currencies" defaultValue={data.currencies} onChange={(e) => handleCurrencyChange(e)} className="w-full" />
                                        <br />
                                        <label htmlFor="dropdown" className="font-bold">Number of Lines</label> <br />
                                        <select name="dropdown" id="dropdown" defaultValue={data.lines} onChange={(e) => handleLineChange(e)}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                        <br />
                                        <PrimaryButton type="submit" className="mt-4">Generate New Lines</PrimaryButton>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
