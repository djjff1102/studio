<template>
    <div class="timeline">
        <mainheader></mainheader>
        <timeaxis></timeaxis> 
        <mainfooter></mainfooter>
    </div>
</template>
<script>
    import mainheader from "../components/mainheader"
    import mainfooter from "../components/mainfooter"
    import timeaxis from "../components/timeaxis"
    export default {
        name: 'timeline',
        data(){
            return {}
        },
        components: {
            mainheader,
            mainfooter,
            timeaxis
        }
    }
</script>
<style scoped>

</style>