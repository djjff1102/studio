<template>
    <div class="about">
        <mainheader></mainheader>
        <mainabout></mainabout>
        <sendmessage></sendmessage>
        <mainfooter></mainfooter>
    </div>
</template>
<script>
    import mainheader from '../components/mainheader'
    import mainfooter from '../components/mainfooter'
    import sendmessage from '../components/sendmessage'
    import mainabout from '../components/mainabout'
    export default {
        name: 'about',
        data(){
            return {}
        },
        components: {
            mainheader,
            mainfooter,
            sendmessage,
            mainabout
        }
    }
</script>
<style scoped>


</style>