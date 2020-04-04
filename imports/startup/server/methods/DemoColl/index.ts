/**
 * methods
 */
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import SimpleSchema from 'simpl-schema';

import DemoColl from '../../../../api/DemoColl';

// list by search
new ValidatedMethod({
    name: 'DemoColl.methods.listBySearch',
    validate: new SimpleSchema({
        search: {
            label: 'search',
            type: String,
        },
    }).validator(),
    run({ search }: { search: string }) {
        this.unblock();

        return DemoColl.find(
            { content: { $regex: search, $options: 'i' } },
            { fields: { content: 1, createdAt: 1 } }
        ).fetch();
    },
});
