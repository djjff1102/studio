<template>
    <div class="about">
        <div class="mainheader">
            <mainheader></mainheader>
        </div>
        <div class="mainabout">
            <h3>about</h3>
        </div>
        <div class="sendmessage">
            <sendmessage></sendmessage>
        </div>
        <div class="mainfooter">
            <mainfooter></mainfooter>
        </div>
    </div>
</template>
<script>
    import mainheader from '../components/mainheader'
    import mainfooter from '../components/mainfooter'
    import sendmessage from '../components/sendmessage'
    export default {
        name: 'about',
        data(){
            return {}
        },
        components: {
            mainheader,
            mainfooter,
            sendmessage
        }
    }
</script>
<style scoped>
    .mainabout{
        padding-top: 80px;
        height: 1000px;
        background-color: cornsilk;
    }
    .sendmessage{
        height: 500px;
        background-color: coral;
    }
</style>