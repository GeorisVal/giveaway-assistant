import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink';
// import Footer from "@/Components/Footer";
import { Head, useForm } from '@inertiajs/react';

export default function CalendarPage(props) {
    console.log(props);
    return (
        <>
            <Head title="Calendar" />
            <div className='mx-20'>
            <NavLink auth={props.auth}></NavLink>
            <Calendar auth={props.auth} appointments={props.appointments} />
            <hr />
            <Calendar auth={props.auth} appointments={props.appointments} isNext={1}/>
            <div className="my-4 mb-10"></div>
            {/* <Footer></Footer> */}
            </div>
        </>
    )
}
