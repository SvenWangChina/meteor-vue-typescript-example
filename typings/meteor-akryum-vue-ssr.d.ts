declare module 'meteor/akryum:vue-ssr' {
    namespace VueSSR {
        function createApp(context: any): Vue;
        function createApp(context: any): Promise<Vue>;
    }
}
