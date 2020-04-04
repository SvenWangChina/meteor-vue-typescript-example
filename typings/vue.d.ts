import { Tracker } from 'meteor/tracker';

import { Route, RawLocation } from 'vue-router';

declare module 'vue/types/vue' {
    interface VueConfiguration {
        meteor: {
            freeze: boolean;
            subscribe: PushSubscription;
        };
    }

    interface VueConstructor {
        // vue-force-next-tick
        $forceNextTick(callback: (this: this) => void): void;
        $forceNextTick(): Promise<void>;
    }

    interface Vue {
        $subReady: { [key: string]: boolean };

        // vue-force-next-tick
        $forceNextTick(callback: (this: this) => void): void;
        $forceNextTick(): Promise<void>;

        // meteor
        $subscribe(key: string, options: any[]): Function;
        $autorun(reactiveFunction: Function): Tracker.Computation;
        $stopHandle(handle: Tracker.Computation): void;
        $startMeteor(): void;
        $stopMeteor(): void;
        $addMeteorData(key: string, func: Function, proxy?: boolean): Function;
        $addComputed(key: string, watcher: any): void;

        // hook
        beforeCreate(): void;
        created(): void;
        beforeMount(): void;
        mounted(): void;
        beforeUpdate(): void;
        updated(): void;
        activated(): void;
        deactivated(): void;
        beforeDestroy(): void;
        destroyed(): void;

        // vue-class-component register hooks
        beforeRouteEnter(
            to: Route,
            from: Route,
            next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
        ): void;
        beforeRouteLeave(
            to: Route,
            from: Route,
            next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
        ): void;
        beforeRouteUpdate(
            to: Route,
            from: Route,
            next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
        ): void;
    }
}
