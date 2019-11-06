<template>
    <div class="enter">
        <mainheader></mainheader>
        <enterform></enterform>
        <mainfooter></mainfooter>
    </div>
</template>
<script>
    import mainheader from "../components/mainheader"
    import mainfooter from "../components/mainfooter"
    import enterform from "../components/enterform"
    export default {
        name: 'enter',
        data(){
            return {}
        },
        components: {
            mainheader,
            mainfooter,
            enterform
        }
    }
</script>
<style scoped>

</style>