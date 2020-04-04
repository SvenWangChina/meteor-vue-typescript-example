/**
 * tmeasday:publish-counts
 */
declare module 'meteor/tmeasday:publish-counts' {
    import { Subscription } from 'meteor/meteor';
    import { Mongo } from 'meteor/mongo';

    namespace Counts {
        // Client
        function get(name: string): number;
        function has(name: string): boolean;

        // Server
        function publish(
            self: Subscription,
            name: string,
            cursor: Mongo.Cursor<any>,
            options?: {
                noReady?: boolean,
                nonReactive?: boolean,
                countFromField?: object | Function,
                countFromFieldLength?: string | Function,
                noWarnings?: boolean,
            }
        ): { stop(): void };
        function noWarnings(noWarn?: boolean): void;
    }
}
