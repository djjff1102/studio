<template>
    <div class="enter">
        <div class="mainheader">
            <mainheader></mainheader>
        </div>
        <div class="enterFrom">
            <h3>enter</h3>
        </div>
        <div class="mainfooter">
            <mainfooter></mainfooter>
        </div>
    </div>
</template>
<script>
    import mainheader from "../components/mainheader"
    import mainfooter from "../components/mainfooter"
    export default {
        name: 'enter',
        data(){
            return {}
        },
        components: {
            mainheader,
            mainfooter
        }
    }
</script>
<style scoped>
    .enterFrom{
        padding-top: 80px;
        height: 1000px;
        background-color: cornflowerblue;
    }
</style>