<template>
    <div class="index">
        <mainheader></mainheader>
        <wheelplant></wheelplant>
        <introducelist></introducelist>
        <sendmessage></sendmessage>
        <mainfooter></mainfooter>
    </div>
</template>
<script>
    import mainheader from '../components/mainheader'
    import wheelplant from '../components/wheelplant'
    import mainfooter from '../components/mainfooter'
    import introducelist from '../components/introducelist'
    import sendmessage from '../components/sendmessage'
    export default {
        name: 'index',
        data(){
            return {}
        },
        components: {
            mainheader,
            wheelplant,
            mainfooter,
            introducelist,
            sendmessage
        }
    }
</script>
<style scoped>
</style>