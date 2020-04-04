/**
 * init rest API
 */
import { Meteor } from 'meteor/meteor';
import { Restivus } from 'meteor/nimble:restivus';

Meteor.startup(() => {
    console.log('init rest API');
    const Api = new Restivus({
        apiPath: '/',
        useDefaultAuth: true,
        prettyJson: true,
    });

    // /rest-api/:id
    console.log('init reset API：rest-api/:id');
    Api.addRoute('rest-api/:id', {
        get() {
            console.log('rest-api get url params', this.urlParams);
            console.log('rest-api get query params', this.queryParams);
            console.log('rest-api get body params', this.bodyParams);

            return this.urlParams;
        },
        post() {
            console.log('rest-api post url params', this.urlParams);
            console.log('rest-api post query params', this.queryParams);
            console.log('rest-api post body params', this.bodyParams);

            return this.urlParams;
        },
        put() {
            console.log('rest-api put url params', this.urlParams);
            console.log('rest-api put query params', this.queryParams);
            console.log('rest-api put body params', this.bodyParams);

            return this.urlParams;
        },
        patch() {
            console.log('rest-api patch url params', this.urlParams);
            console.log('rest-api patch query params', this.queryParams);
            console.log('rest-api patch body params', this.bodyParams);

            return this.urlParams;
        },
        delete() {
            console.log('rest-api delete url params', this.urlParams);
            console.log('rest-api delete query params', this.queryParams);
            console.log('rest-api delete body params', this.bodyParams);

            return this.urlParams;
        },
    });
});
