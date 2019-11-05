<template>
    <div class="time">
        <div class="mainheader">
            <mainheader></mainheader>
        </div>
        <div class="timeAxis">
            <h3>time</h3>
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
        name: 'time',
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
    .timeAxis{
        padding-top: 80px;
        height: 3000px;
        background-color: beige;
    }
</style>