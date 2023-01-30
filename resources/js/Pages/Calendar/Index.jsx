import Calendar from "@/Components/Calendar";
import NavLink from '@/Components/NavLink'

export default function CalendarPage(props) {
    console.log(props);
    return (
        <>
            <NavLink auth={props.auth}></NavLink>
            <Calendar auth={props.auth} appointments={props.appointments} />
            <hr />
            <Calendar auth={props.auth} appointments={props.appointments} isNext={1}/>
        </>
    )
}
