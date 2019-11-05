<template>
    <div class="mainfooter">
        <div class="message">
            <p>studio © 2000-2019 /</p><strong>xxxxxxx-xx</strong><p>/ xxxxx</p>
        </div>
        <router-link to="/index">studio首页</router-link>
    </div>
</template>
<script>
    export default {
        name: 'mainfooter',
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .mainfooter{
        height: 100px;
        text-align: center;
        background-color: black;
    }
    .message{
        padding-top: 30px;
        display: flex;
        justify-content: center;
        color: #737374;
    }
    .message strong{
        color: #8e8f90;
    }
    .mainfooter a{
        color: #8e8f90;
    }
</style>