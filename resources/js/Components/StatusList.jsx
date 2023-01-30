import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import React, {useState} from "react";
export default function Filters(props) {

    const [show, setShow] = useState(false);
    const toggleFilters = () => setShow(!show);
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
        <p onClick={toggleFilters} className="cursor-default">status</p>
        {show && <div className="w-auto h-auto bg-white absolute top-[3em] left-[8em] p-2 grid grid-cols-2 rounded-md border-2 gap-2 fixed">
            <label className="mr-6">
                <Checkbox id="cbdnr" name="cbdnr" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">DNR</span>
            </label>
            <label>
                <Checkbox id="cbinvalid" name="cbinvalid" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Invalid</span>
            </label>
            <label className="mr-6">
                <Checkbox id="cbcontated" name="cbcontated" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Contacted</span>
            </label>
            <label>
                <Checkbox id="cbpending" name="cbpending" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Pending</span>
            </label>
            <label className="mr-6">
                <Checkbox id="cbcollected" name="cbcollected" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Collected</span>
            </label>
            <label>
                <Checkbox id="cbscheduledweb" name="cbscheduledweb" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Web</span>
            </label>
            <label className="mr-6">
                <Checkbox id="cbscheduleddisc" name="cbscheduleddisc" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Discord</span>
            </label>
            <label>
                <Checkbox id="cbscheduledprog" name="cbscheduledprog" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Scheduled Programs</span>
            </label>
            <label className="mr-6">
                <Checkbox id="cbdone" name="cbdone" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Done</span>
            </label>
            <label>
                <Checkbox id="cbcancelled" name="cbcancelled" value={data.remember} handleChange={onHandleChange} />
                <span className="ml-2">Cancelled</span>
            </label>
        </div>
        }
    </>

)
}
