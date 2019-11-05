<template>
    <div class="mainheader">
        <div class="logo">
            <router-link to="index">studio</router-link>
        </div>
        <div class="menu">
            <router-link to="index">index</router-link>
            <router-link to="time">time</router-link>
            <router-link to="enter">enter</router-link>
            <router-link to="about">about</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainheader',
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .mainheader{
        position: fixed;
        width: 100%;
        height: 80px;
        background-color: white;;
        font-size: 20px;
        display: flex;
        justify-content: space-between;

        min-width: 700px;
    }
    .menu{
        padding-right: 30px;
    }
    .menu a{
        text-decoration: none;
        line-height: 80px;
        margin: 0 30px;
    }
    .logo{
        width: 200px;
        height: 80px;
        text-align: center;
    }
    .logo a{
        line-height: 80px;
    }
</style>