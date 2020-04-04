/**
 * users
 */
import { Meteor } from 'meteor/meteor';

import moment from 'moment';
import SimpleSchema from 'simpl-schema';

const schema: SimpleSchema = new SimpleSchema(
    {
        username: {
            label: 'username',
            type: String,
        },
        nickname: {
            label: 'nickname',
            type: String,
        },
        createdAt: {
            label: 'created at',
            type: Date,
        },
        createdAtDay: {
            label: 'created at day',
            type: Date,
        },
        status: {
            label: 'status',
            type: String,
            defaultValue: 'offline',
            allowedValues: ['online', 'away', 'busy', 'offline'],
        },
    },
    {
        clean: {
            filter: true,
            autoConvert: true,
            removeEmptyStrings: false,
            trimStrings: true,
            getAutoValues: true,
            removeNullsFromArrays: true,
        },
    }
);
Meteor.users.attachSchema(schema);

// helpers
Meteor.users.helpers({
    /**
     * format createdAt
     *
     * @param {Meteor.User} this
     * @param {string} [format='YYYY-MM-DD'] - format
     * @returns {string}
     */
    createdAtStr(this: Meteor.User, format: string = 'YYYY-MM-DD'): string {
        return moment(this.createdAt).format(format);
    },
});

// permissions
Meteor.users.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
});
