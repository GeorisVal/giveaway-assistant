import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink';
import { Head } from '@inertiajs/react';
import Buttons from "@/Components/Buttons";
import Responsive from "@/Components/Responsive";

export default function CalendarPage(props) {
    console.log(props);
    return (
        <>
            <Head title="Calendar" />
            <div className='mx-20 bg-gray-100'>
            <NavLink auth={props.auth}></NavLink>
                <div className="max-md:hidden">
                    <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations}/>
                    <hr />
                    <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations} isNext={1}/>
                    <div className="my-4 mb-10"></div>
                    <Buttons></Buttons>
                </div>
                <Responsive />
            </div>
        </>
    )
}
