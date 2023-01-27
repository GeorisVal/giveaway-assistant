import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import React, {useState} from "react";
export default function Filters() {

    const [show, setShow] = useState(false);
    const { data, setData, put, processing, errors } = useForm({
        cbinvalid: '',
        cbdnr: '',
        cbcontated: '',
        cbpending: '',
        cbcollected: '',
        cbscheduledweb: '',
        cbscheduleddisc: '',
        cbscheduledprog: '',
        cbdone: '',
        cbcancelled: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        console.log(data)
    };

return (
    <>
        <div className="w-[400px] h-[175px] bg-red-500 absolute top-[8em] left-[8em] p-2">
            <label className="mr-6">
                <Checkbox id="cbdnr" name="cbdnr" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">DNR</span>
            </label>
            <label>
                <Checkbox id="cbinvalid" name="cbinvalid" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Invalid</span>
            </label>
            <br />
            <label className="mr-6">
                <Checkbox id="cbcontated" name="cbcontated" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Contacted</span>
            </label>
            <label>
                <Checkbox id="cbpending" name="cbpending" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Pending</span>
            </label>
            <br />
            <label className="mr-6">
                <Checkbox id="cbcollected" name="cbcollected" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Collected</span>
            </label>
            <label>
                <Checkbox id="cbscheduledweb" name="cbscheduledweb" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Web</span>
            </label>
            <br />
            <label className="mr-6">
                <Checkbox id="cbscheduleddisc" name="cbscheduleddisc" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Discord</span>
            </label>
            <label>
                <Checkbox id="cbscheduledprog" name="cbscheduledprog" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Programs</span>
            </label>
        </div>
    </>
)
}
