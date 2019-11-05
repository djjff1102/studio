<template>
    <div class="index">
        <div class="mainheader">
            <mainheader></mainheader>
        </div>
        <div class="wheelplant">
            <wheelplant></wheelplant>
        </div>
        <div class="introducelist">
            <introducelist></introducelist>
        </div>
        <div class="mainfooter">
            <mainfooter></mainfooter>
        </div>
    </div>
</template>
<script>
    import mainheader from '../components/mainheader'
    import wheelplant from '../components/wheelplant'
    import mainfooter from '../components/mainfooter'
    import introducelist from '../components/introducelist'
    export default {
        name: 'index',
        data(){
            return {}
        },
        components: {
            mainheader,
            wheelplant,
            mainfooter,
            introducelist
        }
    }
</script>
<style scoped>

</style>