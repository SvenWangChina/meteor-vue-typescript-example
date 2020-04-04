import { VueSSR } from 'meteor/akryum:vue-ssr';

import Vue from 'vue';

import CreateApp from '../../app';

VueSSR.createApp = (context: any): Promise<Vue> => {
    return new Promise((resolve: Function): void => {
        console.log(context);
        const { app, router } = CreateApp();

        // Set the URL in the router
        router.push(context.url);
        router.onReady((): void => {
            // Can use components prefetch here...

            // Called when Vue app has finished rendering
            context.rendered = (): void => {
                // Inject some arbitrary JS
                context.js = `console.log('hello')`;
            };

            resolve(app);
        });
    });
};
