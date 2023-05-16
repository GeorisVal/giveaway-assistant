import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import React, {useState, useEffect} from "react";

export default function Filters(props) {
    const [show, setShow] = useState(false);
    // console.log(props.status);
    const toggleFilters = () => setShow(!show);
    const { data, setData } = useForm({
        nostatus: props.status[0].visible,
        cancelled: props.status[1].visible,
        completed: props.status[2].visible,
        dnr: props.status[3].visible,
        contacted: props.status[4].visible,
        giveawaylive: props.status[5].visible,
        invalid: props.status[6].visible,
        collected: props.status[7].visible,
        pending: props.status[8].visible,
        scheduleddiscord: props.status[9].visible,
        scheduledprograms: props.status[10].visible,
        scheduledwebsite: props.status[11].visible,
        splitted: props.status[12].visible,
        winnercontacted: props.status[13].visible
    });
    function submit(e) {
        e.preventDefault();
        for (const status of Object.keys(data)) {
            const visible = data[status];
            axios.put("/api/donations-status/"+status, {visible: visible})
                .then((response) => {console.log(status + response)})
        }
        toggleFilters();
        setTimeout(function(){
             window.location.reload();
        }, 2000);
    }
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const clearAll = () => {
        setData(
            {
                nostatus: false,
                cancelled: false,
                completed: false,
                dnr: false,
                contacted: false,
                giveawaylive: false,
                invalid: false,
                collected: false,
                pending: false,
                scheduleddiscord: false,
                scheduledprograms: false,
                scheduledwebsite: false,
                splitted: false,
                winnercontacted: false
            }
        )
    }
    const checkAll = () => {
        setData(
            {
                nostatus: true,
                cancelled: true,
                completed: true,
                dnr: true,
                contacted: true,
                giveawaylive: true,
                invalid: true,
                collected: true,
                pending: true,
                scheduleddiscord: true,
                scheduledprograms: true,
                scheduledwebsite: true,
                splitted: true,
                winnercontacted: true
            }
        )
    }

return (
    <>
        <p onClick={toggleFilters} className="cursor-pointer">status ⇅</p>
        {show &&
            <form className="w-auto h-auto bg-white top-[11em] left-[8em] p-2 grid grid-cols-2 rounded-md border-2 gap-2 fixed z-50" onSubmit={submit}>
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
                    <span className="ml-2">Pending Pickup</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="collected" name="collected" value={data.remember} checked={data["collected"]} handleChange={onHandleChange} />
                    <span className="ml-2">Collected</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="giveawaylive" name="giveawaylive" value={data.remember} checked={data["giveawaylive"]} handleChange={onHandleChange} />
                    <span className="ml-2">Giveaway Live</span>
                </label>
                <label>
                    <Checkbox id="scheduledwebsite" name="scheduledwebsite" value={data.remember} checked={data["scheduledwebsite"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Web</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="scheduleddiscord" name="scheduleddiscord" value={data.remember} checked={data["scheduleddiscord"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Discord</span>
                </label>
                <label>
                    <Checkbox id="scheduledprograms" name="scheduledprograms" value={data.remember} checked={data["scheduledprograms"]} handleChange={onHandleChange} />
                    <span className="ml-2">Scheduled Programs</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="completed" name="completed" value={data.remember} checked={data["completed"]} handleChange={onHandleChange} />
                    <span className="ml-2">Completed</span>
                </label>
                <label>
                    <Checkbox id="cancelled" name="cancelled" value={data.remember} checked={data["cancelled"]} handleChange={onHandleChange} />
                    <span className="ml-2">Cancelled</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="nostatus" name="nostatus" value={data.remember} checked={data["nostatus"]} handleChange={onHandleChange} />
                    <span className="ml-2">No Status</span>
                </label>
                <label>
                    <Checkbox id="splitted" name="splitted" value={data.remember} checked={data["splitted"]} handleChange={onHandleChange} />
                    <span className="ml-2">Splitted</span>
                </label>
                <label>
                    <Checkbox id="winnercontacted" name="winnercontacted" value={data.remember} checked={data["winnercontacted"]} handleChange={onHandleChange} />
                    <span className="ml-2">Winner Contacted</span>
                </label>
                    <p onClick={clearAll} className="bg-red-200 text-center cursor-pointer">Clear All</p>
                    <p onClick={checkAll} className="bg-green-200 text-center cursor-pointer">Check All</p>
                    <button type="submit" className="bg-green-200 col-span-2">Apply Filters</button>
            </form>
        }
    </>

)
}
