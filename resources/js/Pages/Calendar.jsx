import React, { Component } from "react";
import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";

import "./Calendar.css";

class MonthlyCalendar extends Component {
    constructor(props) {
        super(props);

        this.calendarRef = React.createRef();

        this.state = {
            eventHeight: 30,
            headerHeight: 30,
            cellHeaderHeight: 25,
            onBeforeEventRender: (args) => {
                args.data.borderColor = "darker";
                if (args.data.backColor) {
                    args.data.barColor = DayPilot.ColorUtil.darker(
                        args.data.backColor,
                        -1
                    );
                }
            },
            contextMenu: new DayPilot.Menu({
                items: [
                    {
                        text: "Delete",
                        onClick: (args) => {
                            const e = args.source;
                            this.calendar.events.remove(e);
                        },
                    },
                    {
                        text: "-",
                    },
                    {
                        text: "Discord",
                        icon: "icon icon-blue",
                        color: "#d7ddf5",
                        onClick: (args) =>
                            this.updateColor(args.source, args.item.color),
                    },
                    {
                        text: "Nookazon",
                        icon: "icon icon-green",
                        color: "#d8f2df",
                        onClick: (args) =>
                            this.updateColor(args.source, args.item.color),
                    },
                    {
                        text: "Donor",
                        icon: "icon icon-yellow",
                        color: "#2882d6",
                        onClick: (args) =>
                            this.updateColor(args.source, args.item.color),
                    },
                    {
                        text: "Winner",
                        icon: "icon icon-red",
                        color: "#68bd99",
                        onClick: (args) =>
                            this.updateColor(args.source, args.item.color),
                    },
                    {
                        text: "Auto",
                        color: "#e7e5e4",
                        onClick: (args) =>
                            this.updateColor(args.source, args.item.color),
                    },
                ],
            }),
            onTimeRangeSelected: async (args) => {
                const modal = await DayPilot.Modal.prompt(
                    "Create a new event:",
                    "Name of the event"
                );

                this.calendar.clearSelection();
                if (!modal.result) {
                    return;
                }
                this.calendar.events.add({
                    start: args.start,
                    end: args.end,
                    id: DayPilot.guid(),
                    text: modal.result,
                });
            },
        };
    }

    componentDidMount() {
        // load event data
        this.setState({
            startDate: "2023-01-01",
            events: [
                {
                    id: 1,
                    text: "Event 1",
                    start: "2023-01-08",
                    end: "2023-01-09",
                    backColor: "#d5663e",
                },
                {
                    id: 2,
                    text: "Event 2",
                    start: "2023-01-25",
                    end: "2023-01-26",
                    backColor: "#ecb823",
                },
                {
                    id: 3,
                    text: "Event 3",
                    start: "2023-01-28",
                    end: "2023-01-28",
                    backColor: "#ecb823",
                },
                {
                    id: 4,
                    text: "Event 4",
                    start: "2023-01-10",
                    end: "2023-01-12",
                    backColor: "#ecb823",
                },
                {
                    id: 5,
                    text: "Event 5",
                    start: "2023-01-10",
                    end: "2023-01-12",
                    backColor: "#ecb823",
                },
            ],
        });
    }

    updateColor(e, color) {
        e.data.backColor = color;
        this.calendar.events.update(e);
    }

    get calendar() {
        return this.calendarRef.current.control;
    }

    render() {
        return (
            <div class="calendar">
                <DayPilotMonth {...this.state} ref={this.calendarRef} />
            </div>
        );
    }
}

export default MonthlyCalendar;
