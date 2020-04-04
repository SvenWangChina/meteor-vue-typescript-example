/**
 * aldeed:collection2-core
 */
declare module 'meteor/mongo' {
    import SimpleSchema from 'simpl-schema';

    namespace Mongo {
        interface Collection<T> {
            attachSchema(schema: SimpleSchema): void;
        }
    }
}
