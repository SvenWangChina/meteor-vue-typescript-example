/**
 * Demo
 *
 * @exports DemoColl
 */
import { Mongo } from 'meteor/mongo';

import moment from 'moment';
import SimpleSchema from 'simpl-schema';

import { DemoDocument } from './declaration';
import getDay from '../../utils/getDay';

class DemoCollection extends Mongo.Collection<DemoDocument> {
    insert(doc: CollOptional<DemoDocument>, callback?: Function): string {
        doc.createdAt = new Date();
        doc.createdAtDay = getDay(doc.createdAt);

        return super.insert(doc as any, callback);
    }

    update(
        selector:
            | string
            | Mongo.ObjectID
            | Mongo.Query<DemoDocument>
            | Mongo.QueryWithModifiers<DemoDocument>,
        modifier: Mongo.Modifier<DemoDocument>,
        options?: { multi?: boolean; upsert?: boolean },
        callback?: Function
    ): number {
        return super.update(selector, modifier, options, callback);
    }

    upsert(
        selector:
            | string
            | Mongo.ObjectID
            | Mongo.Query<DemoDocument>
            | Mongo.QueryWithModifiers<DemoDocument>,
        modifier: Mongo.Modifier<DemoDocument>,
        options?: { multi?: boolean; upsert?: boolean },
        callback?: Function
    ): {
        numberAffected?: number;
        insertedId?: string;
    } {
        return super.upsert(selector, modifier, options, callback);
    }

    remove(
        selector:
            | string
            | Mongo.ObjectID
            | Mongo.Query<DemoDocument>
            | Mongo.QueryWithModifiers<DemoDocument>,
        callback?: Function
    ): number {
        return super.remove(selector, callback);
    }
}

const DemoColl: DemoCollection = new DemoCollection('demo');
const schema: SimpleSchema = new SimpleSchema(
    {
        content: {
            label: 'content',
            type: String,
        },
        createdAt: {
            label: 'created at',
            type: Date,
        },
        createdAtDay: {
            label: 'created at day',
            type: Date,
        },
        removed: {
            label: 'removed',
            type: Boolean,
            defaultValue: false,
        },
        pg_status: {
            label: 'pg status',
            type: SimpleSchema.Integer,
            defaultValue: 0,
        },
    },
    {
        clean: {
            filter: true,
            autoConvert: true,
            removeEmptyStrings: false,
            trimStrings: true,
            getAutoValues: true,
            removeNullsFromArrays: true,
        },
    }
);
DemoColl.attachSchema(schema);

// helpers
DemoColl.helpers({
    /**
     * format createdAt
     *
     * @param {DemoDocument} this
     * @param {string} [format='YYYY-MM-DD'] - format
     * @returns {string}
     */
    createdAtStr(this: DemoDocument, format: string = 'YYYY-MM-DD'): string {
        return moment(this.createdAt).format(format);
    },
});

// permissions
DemoColl.deny({
    insert() {
        return true;
    },
    update() {
        return true;
    },
    remove() {
        return true;
    },
});

export default DemoColl;
