import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
// import {getDisplayDate} from '../utils/index';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    };

    render() {
        let {event: {title, color, start}, onSelect} = this.props;
        const eventPastDue = start > Date.now();
        // console.log(new Date(start).toString());
        // console.log(title, start > Date.now());
        // TODO/DONE: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out

        return (
            <button
                className={`time-slot-event time-slot-event--${color} ${eventPastDue &&
                    'time-slot-event--pastdue'} `}
                onClick={onSelect}
            >
                {title} {this.props.event.time}
            </button>
        );
    }
}
