import Calendar from "@/Components/Calendar";

export default function CalendarPage(props) {
    console.log(props);
    return <Calendar auth={props.auth} appointments={props.appointments} />;
}
