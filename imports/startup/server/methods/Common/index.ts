/**
 * common methods
 */
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

// get time for server
new ValidatedMethod({
    name: 'Common.methods.getTime',
    validate: new SimpleSchema({}).validator(),
    run() {
        this.unblock();

        return Date.now();
    },
});
