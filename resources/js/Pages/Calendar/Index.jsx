import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink';
// import Footer from "@/Components/Footer";
import { Head } from '@inertiajs/react';

export default function CalendarPage(props) {
    console.log(props);
    return (
        <>
            <Head title="Calendar" />
            <div className='mx-20 bg-gray-100'>
            <NavLink auth={props.auth}></NavLink>
            <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations}/>
            <hr />
            <Calendar auth={props.auth} appointments={props.appointments} donations={props.donations} isNext={1}/>
            <div className="my-4 mb-10"></div>
            {/*<Footer></Footer>*/}
            </div>
        </>
    )
}
