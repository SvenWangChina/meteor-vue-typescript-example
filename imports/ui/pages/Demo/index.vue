<template>
    <main-layout>
        <h1>Demo</h1>
        <h2>subscribe demos</h2>
        <ul>
            <li v-for="(demo, index) in subDemos" :key="index">{{ demo.content }}</li>
        </ul>

        <h2>method demos</h2>
        <input v-model="search" type="search" placeholder="Search by content">
        <ul>
            <li v-for="(demo, index) in methodDemos" :key="index">{{ demo.content }}</li>
        </ul>
    </main-layout>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style scoped lang="less" src="index.less"></style>
