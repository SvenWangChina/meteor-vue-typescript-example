/**
 * init client
 */
import { Meteor } from 'meteor/meteor';
import { UserPresence } from 'meteor/konecty:user-presence';

import CreateApp from '../../app';

import '../../api';

Meteor.startup(() => {
    // create app
    CreateApp((): void => {
        console.log('app mounted');
    });

    // Time of inactivity to set user as away automaticly. Default 60000
    UserPresence.awayTime = 300000;

    // Set user as away when window loses focus. Defaults false
    UserPresence.awayOnWindowBlur = false;

    // Start monitor for user activity
    UserPresence.start();
});
