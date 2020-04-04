# meteor-vue-typescript

# install npm packages

    meteor npm install

# run

    meteor reset && meteor run --settings settings.json

# Frameworks

Meteor.js + TypeScript + Vue.js + Vue-Router + Vuex

| Name       | Version |
| ---------- | ------- |
| meteor     | 1.10.1  |
| typescript | 3.8.3   |
| mongodb    | 4.2.1   |
| node       | 12.16.1 |
| npm        | 6.14.0  |
| vue        | 2.6.11  |
| vue-router | 3.1.6   |
| vuex       | 3.1.3   |

# Note

I want use `akryum:vue-ssr` for SSR, but `vue-class-component` and `vue-property-decorator` don't support.

# Application Structure

    meteor-vue-typescript-example
        |--.meteor
        |--client                               client resources
        |   |--compatibility                    This folder is for compatibility with JavaScript libraries that rely on variables declared with var at the top level being exported as globals
        |   |
        |   |--normalize.css
        |   |--main.css
        |   |--main.html
        |   |--main.ts                          client entry point, imports all client code
        |
        |--imports
        |   |--api                              Collections
        |   |   |--DemoColl                     Demo collection
        |   |   |   |--declaration.ts           collection fields
        |   |   |   |--index.ts                 define、SimpleSchema、helpers、permissions
        |   |   |
        |   |   |--UsersColl                    users collection
        |   |   |--index.ts
        |   |
        |   |--app
        |   |   |--store                        store
        |   |   |--classComponentHooks.ts       init class component hooks
        |   |   |--index.ts                     init app
        |   |   |--initPlugins.ts               init vue.js plugins
        |   |   |--routes.ts                    set up all routes in the app
        |   |
        |   |--config
        |   |   |--CONSTANTS.ts                 constants
        |   |   |--regExps.ts                   regExps
        |   |
        |   |--startup
        |   |   |--client                       client resources
        |   |   |   |--index.ts                 import client startup through a single index entry point
        |   |   |
        |   |   |--server                       server resources
        |   |       |--methods                  set up all methods
        |   |       |--publications             set up all publications
        |   |       |--fixtures.ts              fill the DB with example data on startup
        |   |       |--index.ts                 import server startup through a single index entry point
        |   |       |--initAccounts.ts          init accounts event listeners
        |   |       |--initKadira.ts            init Kadira
        |   |       |--initMongoIndex.ts        init MongoDB indexes
        |   |       |--initRestAPI.ts           init rest API
        |   |       |--initRoles.ts             init roles
        |   |       |--initSimpleSchema.ts      init Simple Schema
        |   |       |--scheduleJobs.ts          init schedule jobs
        |   |       |--security.ts              init ddp rate limiter
        |   |
        |   |--ui
        |   |   |--App                          App component
        |   |   |--components                   all reusable components
        |   |   |   |--AppSpacer                spacer for display flex
        |   |   |
        |   |   |--layouts                      wrapper components for behaviour and visuals
        |   |   |
        |   |   |--pages                        entry points for rendering used by the router
        |   |       |--Demo                     Demo page
        |   |       |   |--index.ts
        |   |       |   |--index.less
        |   |       |   |--index.vue
        |   |       |
        |   |       |--NotFound.vue             NotFound page
        |   |
        |   |--utils                            utils
        |
        |--node_modules                         npm packages
        |
        |--packages                             local meteor packages
        |
        |--private                              All files inside a top-level directory called private/ are only accessible from server code and can be loaded via the Assets API
        |
        |--public                               All files inside a top-level directory called public/ are served as-is to the client
        |
        |--server                               server resources
        |   |--main.js                          server entry point, imports all server code
        |
        |--tests                                unit tests
        |
        |--typings                              all typings
        |--.eslintAlloyBase.js                  eslint
        |--.eslintAlloyTypeScript.js            eslint
        |--.eslintAlloyVue.js                   eslint
        |--.eslintrc.js                         eslint
        |--.gitignore                           git ignore
        |--package-lock.json
        |--package.json
        |--README.md
        |--settings.json                        settings for meteor
        |--tsconfig.json

# default meteor packages

    accounts-base                     1.6.0  A user account system
    accounts-password                 1.6.0  Password support for accounts
    akryum:vue-component              0.15.2  VueJS single-file components that hot-reloads
    akryum:vue-less                   0.2.1  Add less support for vue components
    alanning:roles                    3.2.2  Authorization package for Meteor
    aldeed:collection2-core           2.1.2  Core package for aldeed:collection2
    aldeed:schema-deny                3.0.0  Deny inserting or updating certain properties through schema options
    dburles:collection-helpers        1.1.0  Transform your collections with helpers that you define
    ddp-rate-limiter                  1.0.7  The DDPRateLimiter allows users to add rate limits to DDP methods and subscriptions.
    dynamic-import                    0.5.1  Runtime support for Meteor 1.5 dynamic import(...) syntax
    ecmascript                        0.14.2  Compiler plugin that supports ES2015+ in all .js files
    ejson                             1.1.1  Extended and Extensible JSON library
    es5-shim                          4.8.0  Shims and polyfills to improve ECMAScript 5 support
    fastclick                         1.0.13  Faster touch events on mobile
    http                              1.4.2  Make HTTP calls to remote servers
    konecty:user-presence             2.6.3  Track user status
    lamhieu:unblock                   1.0.0  A utils to unblock subscriptions, a this.unblock inside for Meteor Publications
    lmachens:kadira                   2.31.0  Performance Monitoring for Meteor
    mdg:validated-method              1.2.0  A simple wrapper for Meteor.methods
    meteor-base                       1.4.0  Packages that every Meteor app needs
    mongo                             1.9.0  Adaptor for using MongoDB and Minimongo over DDP
    nathantreid:vue-typescript-babel  1.0.3  Add typescript support for vue components
    nimble:restivus                   0.8.12  Create authenticated REST APIs in Meteor 0.9+ via HTTP/HTTPS. Setup CRUD endpoints for Collections.
    reywood:publish-composite         1.7.3  Publish a set of related documents from multiple collections with a reactive join
    sakulstra:aggregate               1.4.3  Proper MongoDB aggregations support for Meteor
    shell-server                      0.5.0  Server-side component of the `meteor shell` command.
    standard-minifier-css             1.6.0  Standard css minifier used with Meteor apps by default.
    standard-minifier-js              2.6.0  Standard javascript minifiers used with Meteor apps by default.
    static-html                       1.2.2  Define static page content in .html files
    tmeasday:publish-counts           0.8.0  Publish the count of a cursor, in real time
    tracker                           1.2.0  Dependency tracker to allow reactive callbacks
    typescript                        3.7.5  Compiler plugin that compiles TypeScript and ECMAScript in .ts and .tsx files

# default npm packages

    "dependencies": {
        "@babel/core": "^7.8.7",
        "@babel/runtime": "^7.8.7",
        "bcrypt": "^4.0.1",
        "lodash": "^4.17.15",
        "meteor-node-stubs": "^1.0.0",
        "moment": "^2.24.0",
        "node-schedule": "^1.3.2",
        "simpl-schema": "^1.5.7",
        "vue": "^2.6.11",
        "vue-force-next-tick": "^1.1.0",
        "vue-meteor-tracker": "^2.0.0-beta.5",
        "vue-router": "^3.1.6",
        "vuex": "^3.1.3"
    },
    "devDependencies": {
        "@babel/plugin-transform-typescript": "^7.8.7",
        "@types/lodash": "^4.14.149",
        "@types/meteor": "^1.4.41",
        "@types/mocha": "^7.0.2",
        "@types/node-schedule": "^1.3.0",
        "@types/simpl-schema": "^0.2.6",
        "@typescript-eslint/eslint-plugin": "^2.23.0",
        "@typescript-eslint/parser": "^2.23.0",
        "babel-eslint": "^10.1.0",
        "eslint": "^6.8.0",
        "eslint-plugin-vue": "^6.2.2",
        "mocha": "^7.1.0",
        "typescript": "^3.8.3",
        "vue-class-component": "^7.2.3",
        "vue-eslint-parser": "^7.0.0",
        "vue-property-decorator": "^8.4.0",
        "vuex-class": "^0.3.2"
    },

# License

Released under the [MIT](LICENSE) License.
