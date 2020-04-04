import { DDP } from 'meteor/ddp';

declare module 'meteor/accounts-base' {
    interface AccountsClientOptions {
        connection?: DDP.DDPStatic;
        ddpUrl?: string;
    }
    interface callLoginMethodOptions {
        methodName?: string;
        methodArguments?: any[];
        validateResult?: Function;
        userCallback?: Function;
    }

    module Accounts {
        function _storedLoginToken(): string;
    }

    class AccountsClient {
        constructor(options: AccountsClientOptions);

        userId(): string;
        /**
         * @summary True if a login method (such as  `Meteor.loginWithPassword`, `Meteor.loginWithFacebook`, or `Accounts.createUser`) is currently in progress. A reactive data source.
         * @locus Client
         */
        loggingIn(): boolean;
        /**
         * @summary True if a logout method (such as `Meteor.logout`) is currently in progress. A reactive data source.
         * @locus Client
         */
        loggingOut(): boolean;
        /**
         * @summary Register a new login function on the client. Intended for OAuth package authors. You can call the login function by using
         `Accounts.callLoginFunction` or `Accounts.callLoginFunction`.
        * @locus Client
        * @param {string} funcName The name of your login function. Used by `Accounts.callLoginFunction` and `Accounts.applyLoginFunction`.
        Should be the OAuth provider name accordingly.
        * @param {Function} func The actual function you want to call. Just write it in the manner of `loginWithFoo`.
        */
        registerClientLoginFunction(funcName: string, func: Function): void;
        /**
         * @summary Call a login function defined using `Accounts.registerClientLoginFunction`. Excluding the first argument, all remaining
         arguments are passed to the login function accordingly. Use `applyLoginFunction` if you want to pass in an arguments array that contains
        all arguments for the login function.
        * @locus Client
        * @param {string} funcName The name of the login function you wanted to call.
        */
        callLoginFunction(funcName: string, funcArgs: Function[]): any;
        /**
         * @summary Same as ``callLoginFunction` but accept an `arguments` which contains all arguments for the login
         function.
        * @locus Client
        * @param {string} funcName The name of the login function you wanted to call.
        * @param {Array} funcArgs The `arguments` for the login function.
        */
        applyLoginFunction(funcName: string, funcArgs: Function[]): any;
        /**
         * @summary Log the user out.
         * @locus Client
         * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
         */
        logout(callback?: Function): void;
        /**
         * @summary Log out other clients logged in as the current user, but does not log out the client that calls this function.
         * @locus Client
         * @param {Function} [callback] Optional callback. Called with no arguments on success, or with a single `Error` argument on failure.
         */
        logoutOtherClients(callback?: Function): void;
        /**
         * Call a login method on the server.
         * A login method is a method which on success calls `this.setUserId(id)` and
         * `Accounts._setLoginToken` on the server and returns an object with fields
         * 'id' (containing the user id), 'token' (containing a resume token), and
         * optionally `tokenExpires`.
         *
         * This function takes care of:
         *   - Updating the Meteor.loggingIn() reactive data source
         *   - Calling the method in 'wait' mode
         *   - On success, saving the resume token to localStorage
         *   - On success, calling Accounts.connection.setUserId()
         *   - Setting up an onReconnect handler which logs in with
         *     the resume token
         *
         * Options:
         *  - methodName: The method to call (default 'login')
         *  - methodArguments: The arguments for the method
         *  - validateResult: If provided, will be called with the result of the method. If it throws, the client will not be logged in (and its error will be passed to the callback).
         *  - userCallback: Will be called with no arguments once the user is fully logged in, or with the error on error.
         *
         * @param {callLoginMethodOptions} options
         */
        callLoginMethod(options?: callLoginMethodOptions): void;
        makeClientLoggedOut(): void;
        makeClientLoggedIn(userId: string, token: string, tokenExpires: Date): void;
        /**
         * A reactive function returning whether the loginServiceConfiguration subscription is ready. Used by accounts-ui to hide the login button until we have all the configuration loaded
         *
         * @returns {boolean}
         */
        loginServicesConfigured(): boolean;
        onPageLoadLogin(f: Function): void;
        loginWithToken(token: string, callback: Function): void;
    }
}
