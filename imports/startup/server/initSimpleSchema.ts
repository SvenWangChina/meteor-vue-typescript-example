/**
 * init Simple Schema
 */
import { Meteor } from 'meteor/meteor';

import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
    console.log('init simple schema error transform');
    // @ts-ignore
    SimpleSchema.defineValidationErrorTransform(
        (err: any): Meteor.Error => new Meteor.Error(403, err.message, err.details),
    );
});
