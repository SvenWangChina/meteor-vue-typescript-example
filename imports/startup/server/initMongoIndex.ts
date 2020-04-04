/**
 * init collection indexes
 */
import { Meteor } from 'meteor/meteor';

import DemoColl from '../../api/DemoColl';

Meteor.startup(() => {
    console.log('init mongodb index');
    DemoColl._ensureIndex({ createdAtDay: 1 }, { background: true });
    Meteor.users._ensureIndex({ createdAtDay: 1 }, { background: true });
});
