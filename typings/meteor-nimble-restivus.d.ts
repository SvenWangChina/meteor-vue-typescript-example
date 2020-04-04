/**
 * nimble:restivus
 */
declare module 'meteor/nimble:restivus' {
    import { Meteor } from 'meteor/meteor';
    import { ClientRequest, ServerResponse } from 'http';

    type RestivusOptions = {
        apiPath?: string;
        auth?: {
            token: string;
            user: Function;
        };
        defaultHeaders?: object;
        defaultOptionsEndpoint?: {
            authRequired?: boolean;
            roleRequired?: boolean;
            action?: Function;
        };
        enableCors?: boolean;
        onLoggedIn?: Function;
        onLoggedOut?: Function;
        prettyJson?: boolean;
        useDefaultAuth?: boolean;
        version?: string;
    };
    type EndpointContext = {
        user: Meteor.User;
        userId: string;
        urlParams: any;
        queryParams: any;
        bodyParams: any;
        request: ClientRequest;
        response: ServerResponse;
        done(): void;
    };

    export class Restivus {
        constructor(options: RestivusOptions);

        addRoute(
            path: string,
            endpoints: {
                getAll?(this: EndpointContext): any;
                get?(this: EndpointContext): any;
                post?(this: EndpointContext): any;
                put?(this: EndpointContext): any;
                patch?(this: EndpointContext): any;
                delete?(this: EndpointContext): any;
            }
        ): any;
        addRoute(
            path: string,
            routeOptions?: {
                authRequired?: boolean;
                roleRequired?: string | string[];
                action?: Function;
            },
            excludedEndpoints?: string | string[],
            endpoints?: {
                getAll?(this: EndpointContext): any;
                get?(this: EndpointContext): any;
                post?(this: EndpointContext): any;
                put?(this: EndpointContext): any;
                patch?(this: EndpointContext): any;
                delete?(this: EndpointContext): any;
            }
        ): any;

        addCollection(
            path: string,
            endpoints: {
                getAll?(this: EndpointContext): any;
                get?(this: EndpointContext): any;
                post?(this: EndpointContext): any;
                put?(this: EndpointContext): any;
                patch?(this: EndpointContext): any;
                delete?(this: EndpointContext): any;
            }
        ): any;
        addCollection(
            path: string,
            routeOptions?: {
                authRequired?: boolean;
                roleRequired?: string | string[];
                action?: Function;
            },
            excludedEndpoints?: string | string[],
            endpoints?: {
                getAll?(this: EndpointContext): any;
                get?(this: EndpointContext): any;
                post?(this: EndpointContext): any;
                put?(this: EndpointContext): any;
                patch?(this: EndpointContext): any;
                delete?(this: EndpointContext): any;
            }
        ): any;
    }
}
