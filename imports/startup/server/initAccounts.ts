/**
 * init accounts
 */
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { UserPresence, UserPresenceMonitor } from 'meteor/konecty:user-presence';

Meteor.startup(() => {
    console.log('init create user event listener');
    Accounts.onCreateUser(
        (options: any, user: Meteor.User): Meteor.User => {
            // on createUser listener
            console.log(options, user);

            return user;
        }
    );

    console.log('init validate login attempt event listener');
    Accounts.validateLoginAttempt(
        (attempt: {
            type: string;
            allowed: boolean;
            methodname: string;
            methodArguments: any[];
            user?: Meteor.User;
            error?: Meteor.Error;
            connection: any;
        }): boolean => {
            // on validate login attempt listener

            return attempt.allowed;
        }
    );

    // Listen for new connections, login, logoff and application exit to manage user status and register methods to be used by client to set user status and default status
    console.log('UserPresence start');
    UserPresence.start();
    // Active logs for every changes
    // Listen for changes in UserSessions and Meteor.users to set user status based on active connections
    console.log('UserPresenceMonitor start');
    UserPresenceMonitor.start();
});