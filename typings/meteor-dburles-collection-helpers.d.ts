/**
 * dburles:collection-helpers
 */
declare module 'meteor/mongo' {
    namespace Mongo {
        interface Collection<T> {
            helpers(helpers: object): void;
        }
    }
}
