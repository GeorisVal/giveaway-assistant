import React from "react";
import axios from "axios";
import moment from 'moment';

const Appointment = (props) => {
    return (
        <tr className="bg-white border-b leading-tight">
            <td className="px-6 py-4 truncate ...">
                {props.username}
            </td>
            <td className="px-6 py-4 truncate ...">
                {moment(props.appointment).format('dddd DD MMMM YYYY')+', at '+moment(props.appointment).format('HH:mm')}
            </td>
            <td className="px-6 py-4 truncate ...">
                {props.contact}
            </td>
        </tr>
    );
};

export default Appointment;
