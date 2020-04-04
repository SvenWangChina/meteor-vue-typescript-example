/**
 * Meteor.call
 */
import KnownMethods from '../imports/utils/methodTypes';

declare module 'meteor/meteor' {
    type FirstArgument<T> = T extends (val: infer R) => any ? R : never;

    namespace Meteor {
        function call<K extends keyof KnownMethods = keyof KnownMethods>(
            methodName: K,
            arg: FirstArgument<KnownMethods[K]>,
        ): ReturnType<KnownMethods[K]>;

        function call<K extends keyof KnownMethods = keyof KnownMethods>(
            methodName: K,
            arg: FirstArgument<KnownMethods[K]>,
            callback: (error: Meteor.Error, data: ReturnType<KnownMethods[K]>) => void,
        ): void;
    }
}
