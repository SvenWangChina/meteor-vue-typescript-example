declare module 'meteor/meteor' {
    namespace Meteor {
        interface User {
            // fields
            _id: string;
            username?: string;
            nickname: string;
            createdAt?: Date;
            createdAtDay?: Date;
            status?: string;

            // helpers
            /**
             * format createdAt
             *
             * @param {string} [format='YYYY-MM-DD'] - format
             * @returns {string}
             */
            createdAtStr(format?: string): string;
        }
        interface Settings {
            public: {
                /**
                 * deploy environment
                 * 0: development
                 * 1: test
                 * 2: production
                 *
                 * @type {number}
                 */
                debug: number;
            };
            private: {
                /**
                 * Kadira endpoint
                 *
                 * @type {string}
                 */
                kadiraAppEndpoint: string;
                /**
                 * Kadira ID
                 *
                 * @type {string}
                 */
                kadiraAppID: string;
                /**
                 * Kadira secret
                 *
                 * @type {string}
                 */
                kadiraAppSecret: string;
            };
            [id: string]: any;
        }
    }
}
