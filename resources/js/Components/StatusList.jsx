import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import React, {useState, useEffect} from "react";

export default function Filters(props) {
console.log(props.status);
    const [show, setShow] = useState(false);
    const toggleFilters = () => setShow(!show);
    console.log(props);
    const { data, setData } = useForm({
        dnr: props.status[3].visible,
        invalid: props.status[5].visible,
        contacted: props.status[2].visible,
        pending: props.status[6].visible,
        collected: props.status[1].visible,
        scheduledweb: props.status[9].visible,
        scheduleddisc: props.status[7].visible,
        scheduledprog: props.status[8].visible,
        done: props.status[4].visible,
        cancelled: props.status[0].visible,
    });
    function submit(e) {
        e.preventDefault();
        for (const status of Object.keys(data)) {
            const visible = data[status];
            axios.put("/api/donations-status/"+status, {visible: visible})
                .then((response) => {console.log(status + response)})
        }
        toggleFilters();
        // setTimeout(function(){
        //     window.location.reload();
        // }, 2000);
    }
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

return (
    <>
        <p onClick={toggleFilters} className="cursor-default">status</p>
        {show &&
            <form className="w-auto h-auto bg-white absolute top-[3em] left-[8em] p-2 grid grid-cols-2 rounded-md border-2 gap-2 fixed z-10" onSubmit={submit}>
                <label className="mr-6">
                    <Checkbox id="dnr" name="dnr" value={data.remember} checked={data["dnr"]} handleChange={onHandleChange} />
                    <span className="ml-2">DNR</span>
                </label>
                <label>
                    <Checkbox id="invalid" name="invalid" value={data.remember}
                              checked={data["invalid"]} handleChange={onHandleChange} />
                    <span className="ml-2">Invalid</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="contacted" name="contacted" value={data.remember} checked={data["contacted"]} handleChange={onHandleChange} />
                    <span className="ml-2">Contacted</span>
                </label>
                <label>
                    <Checkbox id="pending" name="pending" value={data.remember}
                              checked={data["pending"]} handleChange={onHandleChange} />
                    <span className="ml-2">Pending</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="collected" name="collected" value={data.remember} checked={data["collected"]} handleChange={onHandleChange} />
                    <span className="ml-2">Collected</span>
                </label>
                <label>
                    <Checkbox id="scheduledweb" name="scheduledweb" value={data.remember} checked={data["scheduledweb"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Web</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="scheduleddisc" name="scheduleddisc" value={data.remember} checked={data["scheduleddisc"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Discord</span>
                </label>
                <label>
                    <Checkbox id="scheduledprog" name="scheduledprog" value={data.remember} checked={data["scheduledprog"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Programs</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="done" name="done" value={data.remember} checked={data["done"]} handleChange={onHandleChange} />
                    <span className="ml-2">Done</span>
                </label>
                <label>
                    <Checkbox id="cancelled" name="cancelled" value={data.remember} checked={data["cancelled"]} handleChange={onHandleChange} />
                    <span className="ml-2">Cancelled</span>
                </label>
                    <button type="submit" className="bg-green-200 col-span-2">Apply Filters</button>
            </form>
        }
    </>

)
}
