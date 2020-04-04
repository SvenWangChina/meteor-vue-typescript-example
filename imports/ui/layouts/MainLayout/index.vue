<template>
    <div class="app-container">
        <header>Header</header>
        <div class="app-content">
            <slot></slot>
        </div>
        <footer>Footer</footer>
    </div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style scoped lang="less" src="index.less"></style>
