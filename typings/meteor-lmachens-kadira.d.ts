declare module 'meteor/lmachens:kadira' {
    namespace Kadira {
        interface KadiraConnectOptions {
            endpoint?: string;
            payloadTimeout?: number;
            clientEngineSyncDelay?: number;
            thresholds?: object;
            hostname?: string;
            proxy?: string;
        }
        interface KadiraTrackErrorOptions {
            subType?: string;
            stacks?: string;
        }

        /**
         * connect kadira server
         *
         * @param {string} appId - App ID
         * @param {string} appSecret - App Secret
         * @param {KadiraConnectOptions} [options] - Options
         */
        function connect(appId: string, appSecret: string, options?: KadiraConnectOptions): void;
        /**
         * Track error
         *
         * @param {string} type - Error type, don't use：client、method、sub、server-crash、server-internal
         * @param {string} message - Error message
         * @param {KadiraTrackErrorOptions} [options] - Error options
         */
        function trackError(type: string, message: string, options?: KadiraTrackErrorOptions): void;
        function enableErrorTracking(): void;
        function disableErrorTracking(): void;
    }
}
