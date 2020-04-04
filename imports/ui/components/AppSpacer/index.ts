/**
 * Spacer component for display flex
 *
 * @exports AppSpacer
 *
 * @property {string} height - height
 */
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class AppSpacer extends Vue {
    // store

    // prop
    @Prop({ default: '' })
    // @ts-ignore
    readonly height: string;

    // data

    // computed
    /**
     * 样式
     *
     * @readonly
     * @type {{ flex?: number, height?: string }}
     */
    get style(): { flex?: number; height?: string } {
        if (this.height) {
            return { height: this.height };
        }

        return { flex: 1 };
    }

    // watch

    // emit

    // public method

    // private method

    // hook
}
