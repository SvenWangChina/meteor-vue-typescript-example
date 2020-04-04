declare module 'meteor/meteor' {
    interface Subscription {
        unblock(): void;
    }

    namespace Meteor {
        function publish(name: string, func: (this: Subscription, ...args: any[]) => void): void;
    }
}
