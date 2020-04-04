/**
 * Demo page
 *
 * @exports Page
 */
import Vue from 'vue';
import { Component, Prop, Watch, Emit } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import { Route, RawLocation } from 'vue-router';

import { ListBySearchMethodResult } from '../../../startup/server/methods/DemoColl/declaration';
import { DemoDocument } from '../../../api/DemoColl/declaration';
import meteorCallAsync from '../../../utils/meteorCallAsync';

import DemoColl from '../../../api/DemoColl';

@Component({
    components: {},
})
export default class Page extends Vue {
    // store
    @State('test')
    // @ts-ignore
    readonly stateTest: boolean;
    @Getter('test')
    // @ts-ignore
    readonly getterTest: boolean;
    @Mutation('toggleTest')
    // @ts-ignore
    readonly mutationToggleTest: Function;
    @Action('toggleTest')
    // @ts-ignore
    readonly actionToggleTest: Function;

    // prop
    @Prop(Boolean)
    // @ts-ignore
    readonly prop: boolean;

    // data
    search: string = '';
    // method demo list
    methodDemos: ListBySearchMethodResult[] = [];
    // sub demo list
    subDemos: DemoDocument[] = [];

    // computed
    get computedProp(): string {
        return `AAA ${this.prop}`;
    }

    // watch
    @Watch('search', { immediate: true, deep: true })
    onSearchChange(): void {
        this.$_loadDemosBySearch();
    }

    // emit
    @Emit('emitName')
    onEmitName(): void {
        // do something
    }

    // public method
    publicMethodName(): void {}

    // private method
    $_privateMethodName(): void {}
    /**
     * load demos
     */
    $_loadDemosBySearch(): void {
        this.methodDemos = [];
        meteorCallAsync('DemoColl.methods.listBySearch', { search: this.search }).then(
            (demos: ListBySearchMethodResult[]): void => {
                this.methodDemos = demos;
            }
        );
    }

    // hook
    beforeCreate(): void {}
    created(): void {
        // subscribing to data
        this.$subscribe('DemoColl.list', []);
        // tracker collection data
        this.$autorun((): void => {
            this.subDemos = DemoColl.find().fetch();
        });
    }
    beforeMount(): void {}
    mounted(): void {}
    beforeUpdate(): void {}
    updated(): void {}
    activated(): void {}
    deactivated(): void {}
    beforeDestroy(): void {}
    destroyed(): void {}
    beforeRouteEnter(
        to: Route,
        from: Route,
        next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
    ): void {
        console.log(to, from);
        next();
    }
    beforeRouteLeave(
        to: Route,
        from: Route,
        next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
    ): void {
        console.log(to, from);
        next();
    }
    beforeRouteUpdate(
        to: Route,
        from: Route,
        next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void
    ): void {
        console.log(to, from);
        next();
    }
}
