/**
 * get the date at 00:00:00
 *
 * @export
 * @param {Date} [date=new Date()]
 * @returns {Date}
 */
import moment from 'moment';

export default function getDay(date: Date = new Date()): Date {
    return new Date(moment(date).format('YYYY-MM-DD 00:00:00'));
}
