/**
 * init schedule job
 */
import { Meteor } from 'meteor/meteor';

import schedule from 'node-schedule';

Meteor.startup(() => {
    console.log('init XXX schedule job start');
    schedule.scheduleJob(
        '0 1 0 * * *',
        Meteor.bindEnvironment((): void => {
            console.log('XXX schedule job start');
        })
    );
});
