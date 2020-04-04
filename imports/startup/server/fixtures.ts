/**
 * init fixtures
 */
import { Meteor } from 'meteor/meteor';

import DemoColl from '../../api/DemoColl';

Meteor.startup(() => {
    // init fixtures
    if (!DemoColl.findOne()) {
        console.log('init demos');
        for (let i = 0; i < 10; i++) {
            DemoColl.insert({ content: `demo content ${i}` });
        }
    }
});
