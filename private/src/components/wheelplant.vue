<template>
    <div class="wheelplant">
        <div :style="'height:'+fullHeight+'px;'" class="newBackground">
            <h3>studio</h3>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'wheelplant',
        data(){
            return {
                fullHeight: window.innerHeight-80,
                timer:false
            }
        },
        watch:{
            fullHeight(val){
                this.fullHeight = val
                this.timer = true
                let that = this
                setTimeout(function(){
                    that.tiemr = false
                },400)
            }
        },
        mounted(){
            window.onresize = ()=>{
                return (()=>{
                    this.fullHeight = window.innerHeight-80
                })()
            }
        }
    }
</script>
<style scoped>
.newBackground{
    padding-top: 80px;
    background-position: center center;
    background-size: cover;
    background-image: url("../assets/wheelplant.jpg");

    min-width: 700px;
    min-height: 500px;
}
.newBackground h3{
    font-size: 10vh;
    color: white;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>