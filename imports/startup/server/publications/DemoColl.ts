/**
 * publications
 */
import { Meteor } from 'meteor/meteor';

import DemoColl from '../../../api/DemoColl';

// list
Meteor.publish('DemoColl.list', function() {
    this.unblock();

    return DemoColl.find({}, { fields: { content: 1, createdAt: 1 } });
});
