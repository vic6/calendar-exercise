import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {getDisplayDate} from '../utils/index';

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    };

    render() {
        console.log(getDisplayDate);
        let {event: {title, color}, onSelect} = this.props;

        // TODO: Need a way to determine that the event is in the past so that it
        // can be displayed faded-out

        return (
            <button className={`time-slot-event time-slot-event--${color}`} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
