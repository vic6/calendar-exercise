/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

export const filterEventsByDay = (events, timestamp) => {
    // TODO/DONE: Implement day filtering!
    const calDay = new Date(timestamp).toLocaleDateString(dateOptions);

    return events.filter((event) => new Date(event.start).toLocaleDateString(dateOptions) === calDay);
};

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) =>
    events.filter(({start}) => new Date(start).getHours() === hour);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);

    date = date.toLocaleString('en-US', dateOptions);
    // TODO/DONE: Format the date like: "Tuesday, April 11, 2017"
    return date.toString();
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
// TODO/DONE: Implement using a more programmatic approach instead of map
export const getDisplayHour = (hour) => {
    const period = hour < 12 ? 'AM' : 'PM';

    if (hour === 0 || hour === 12) {
        return `12${period}`;
    }
    return `${hour % 12}${period}`;
};

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => events.find(({id}) => id === eventId);
