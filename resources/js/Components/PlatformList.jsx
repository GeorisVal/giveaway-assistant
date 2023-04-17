import Checkbox from "@/Components/Checkbox";
import { useForm } from "@inertiajs/react";
import React, {useState, useEffect} from "react";

export default function FilterPlatform(props) {
    const [show, setShow] = useState(false);
    const toggleFilters = () => setShow(!show);
    const { data, setData } = useForm({
        discord: props.platform[0].visible,
        either: props.platform[1].visible,
        programs: props.platform[2].visible,
        website: props.platform[3].visible,
    });
    function submit(e) {
        e.preventDefault();
        for (const platform of Object.keys(data)) {
            const visible = data[platform];
            axios.put("/api/donations-platform/"+platform, {visible: visible})
                .then((response) => {console.log(platform + response)})
        }
        toggleFilters();
        setTimeout(function(){
             window.location.reload();
        }, 1000);
    }
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const clearAll = () => {
        setData(
            {
                programs: false,
                either: false,
                website: false,
                discord: false
            }
        )
    }
    const checkAll = () => {
        setData(
            {
                programs: true,
                either: true,
                website: true,
                discord: true
            }
        )
    }

return (
    <>
        <p onClick={toggleFilters} className="cursor-pointer">platform ⇅</p>
        {show &&
            <form className="w-auto h-auto bg-white absolute top-[3em] left-[45em] p-2 grid grid-cols-2 rounded-md border-2 gap-2 fixed z-50" onSubmit={submit}>
                <label className="mr-6">
                    <Checkbox id="discord" name="discord" value={data.remember} checked={data["discord"]} handleChange={onHandleChange} />
                    <span className="ml-2">Discord</span>
                </label>
                <label>
                    <Checkbox id="programs" name="programs" value={data.remember}
                              checked={data["programs"]} handleChange={onHandleChange} />
                    <span className="ml-2">Programs</span>
                </label>
                <label className="mr-6">
                    <Checkbox id="website" name="website" value={data.remember} checked={data["website"]} handleChange={onHandleChange} />
                    <span className="ml-2">website</span>
                </label>
                <label>
                    <Checkbox id="either" name="either" value={data.remember}
                              checked={data["either"]} handleChange={onHandleChange} />
                    <span className="ml-2">Either</span>
                </label>
                    <p onClick={clearAll} className="bg-red-200 text-center cursor-pointer">Clear All</p>
                    <p onClick={checkAll} className="bg-green-200 text-center cursor-pointer">Check All</p>
                    <button type="submit" className="bg-green-200 col-span-2">Apply Filters</button>
            </form>
        }
    </>

)
}
