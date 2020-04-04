/**
 * init roles
 */
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import { UserRole } from '../../config/CONSTANTS';

Meteor.startup(() => {
    // @ts-ignore
    if (!Meteor.roles.findOne(UserRole.USER)) {
        console.log(`init role: ${UserRole.USER}`);
        Roles.createRole(UserRole.USER);
    }
    // @ts-ignore
    if (!Meteor.roles.findOne(UserRole.ADMIN)) {
        console.log(`init role: ${UserRole.ADMIN}`);
        Roles.createRole(UserRole.ADMIN);
    }
});
