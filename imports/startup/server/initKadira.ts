/**
 * init kadira
 */
import { Meteor } from 'meteor/meteor';
import { Kadira } from 'meteor/lmachens:kadira';

Meteor.startup(() => {
    if (
        Meteor.settings.private.kadiraAppID &&
        Meteor.settings.private.kadiraAppSecret &&
        Meteor.settings.private.kadiraAppEndpoint
    ) {
        console.log('Kadira: connecting...');
        Kadira.connect(
            Meteor.settings.private.kadiraAppID,
            Meteor.settings.private.kadiraAppSecret,
            { endpoint: Meteor.settings.private.kadiraAppEndpoint },
        );
    }
});
