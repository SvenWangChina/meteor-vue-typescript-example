/**
 * 404 not found
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
    $_goHome(): void {
        this.$router.replace({ name: 'Home' });
    }

    // hook
}
