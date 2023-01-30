import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink';
import Footer from "@/Components/Footer";

export default function CalendarPage(props) {
    console.log(props);
    return (
        <>
            <div className='mx-20'>
            <NavLink auth={props.auth}></NavLink>
            <Calendar auth={props.auth} appointments={props.appointments} />
            <hr />
            <Calendar auth={props.auth} appointments={props.appointments} isNext={1}/>
            <Footer></Footer>
            </div>
        </>
    )
}
