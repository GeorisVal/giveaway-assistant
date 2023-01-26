import Buttons from "@/Components/Buttons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import Footer from "@/Components/Footer";

<<<<<<< HEAD
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
=======
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'resources/css/Calendar.css';
>>>>>>> 61edae414278b829581a479a81c7160d33645ed2

export default function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <NavLink></NavLink>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
        </>
    );
}
