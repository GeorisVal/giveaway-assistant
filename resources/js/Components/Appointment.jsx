import React from "react";
import axios from "axios";
import moment from "moment";

const Appointment = (props) => {
    return (
        <tr
            className={
                props.type == "donor"
                    ? "bg-lightgreen-550 border-b leading-tight"
                    : "bg-green-100 border-b leading-tight"
            }
        >
            <td className="px-6 py-4 truncate ...">
                {props.nookazon_username}
            </td>
            <td className="px-6 py-4 truncate ...">{props.discord_username}</td>
            <td className="px-6 py-4 truncate ...">
                {moment(props.date).format("dddd DD MMMM YYYY") +
                    ", at " +
                    props.time}
            </td>
            <td className="px-6 py-4 truncate ...">{props.contact}</td>
        </tr>
    );
};

export default Appointment;
