import Buttons from "@/Components/Buttons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Footer from "@/Components/Footer";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <NavLink></NavLink>
            <div class="calendar">
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    );
}
