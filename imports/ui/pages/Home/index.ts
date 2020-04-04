/**
 * Home page
 *
 * @exports Page
 */
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {},
})
export default class Page extends Vue {
    // store

    // prop

    // data

    // computed

    // watch

    // emit

    // public method

    // private method
    $_goDemo(): void {
        this.$router.push({ name: 'Demo' });
    }

    // hook
}
