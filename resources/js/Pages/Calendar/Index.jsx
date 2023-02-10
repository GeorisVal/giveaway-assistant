import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink';
import {Head, Link} from '@inertiajs/react';
import Responsive from "@/Components/Responsive";
import SecondaryButton from "@/Components/SecondaryButton";

export default function CalendarPage(props) {
    function checkauth() {
        if (props.auth.user != null) {
            return (
                <Link href={'donations-nodate'}>
                    <SecondaryButton>No Date!</SecondaryButton>
                </Link>)
        }
        else {
            return "";
        }
    }
    return (
        <>
            <Head title="Calendar" />
            <div className='mx-20 bg-gray-100'>
            <NavLink auth={props.auth}></NavLink>
                <div className="max-md:hidden">
                    <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations}/>
                    <hr />
                    <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations} isNext={1}/>
                </div>
                <div className="mb-6">
                    {checkauth()}
                <Responsive />
                </div>
            </div>
        </>
    )
}
