import {getDisplayHour, getDisplayDate} from '../../utils';

describe('getDisplayHour', () => {
    it('Correctly formats the time', () => {
        expect(getDisplayHour(0)).toBe('12AM');
        expect(getDisplayHour(12)).toBe('12PM');
        expect(getDisplayHour(5)).toBe('5AM');
    });
});

describe('getDisplayDate', () => {
    it('Takes a timestamp and returns the formatted date string', () => {
        const time1 = 1523293249184;
        const judgmentDay = 872838000000;
        const time3 = 1213223249184;

        expect(getDisplayDate(time1)).toBe('Monday, April 9, 2018');
        expect(getDisplayDate(judgmentDay)).toBe('Friday, August 29, 1997');
        expect(getDisplayDate(time3)).toBe('Wednesday, June 11, 2008');
    });
});
