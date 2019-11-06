<template>
    <div class="sendmessage">
        <div class="sendmessage-info">
            <div class="sendmessage-title">
                <h3>sendmessage</h3>
                <p>welcome to talk with us about everything</p>
            </div>
            <div v-if="!flag" class="send">
                <label for="sendemail">
                    邮箱：
                    <input v-model="letter.sendemail" id="sendemail" type="email" placeholder="请输入邮箱">
                </label>
                <label for="sendtitle">
                    标题：
                    <input v-model="letter.sendtitle" id="sendtitle" type="title" placeholder="请输入标题">
                </label>
                <label for="sendinfo">
                    内容：
                    <textarea v-model="letter.sendinfo" id="sendinfo" placeholder="请输入详细内容"></textarea>
                </label>
                <button @click.prevent="post">提交</button>
            </div>
            <div v-if="flag" class="success">
                <h3>提交成功</h3>        
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        
        name: 'sendmessage',
        data(){
            return {
                letter: {
                    sendemail:'',
                    sendtitle: '',
                    sendinfo:'',
                    id: Date.now()
                },
                flag: false
            }
        },
        methods:{
            post:function(){
                if(this.letter.sendemail==''||this.letter.sendtitle==''||this.letter.sendinfo==''){
                    return false;
                }
                axios.post('/post.json',this.letter)
                .then(()=>{
                    this.flag = true;
                })
            }
        }
    }
</script>
<style scoped>
.success{
    text-align: center;
    margin-top: 50%;
}
.sendmessage-title{
    text-align: center;
    padding-top: 20px;
}
    .sendmessage-info{
        position: relative;
        width: 30%;
        margin: 0 auto;
        color: white;
    }
    .send{
        margin-top:20px;
    }
    #sendemail,
    #sendinfo,
    #sendtitle{
        width: 100%;
        border: 0;
        outline: none;
        padding: 10px;
        margin: 10px auto;
    }
    #sendinfo{
        resize: none;
    }
    button{
        position:absolute;
        left: 50%;
        margin-left: -15%;
        height: 30px;
        border-radius: 20px;
        border: 0;
        width: 30%;
        color: white;
        background-color:rgba(41, 128, 185,0.7);
        outline: none;
        cursor: pointer;
    }
    button:hover{
        background-color: rgba(41, 128, 185,1.0);
    }
    button:active{
        background-color: blue;
    }
    #sendinfo{
        height: 100px;
    }
    .sendmessage{
        height: 500px;
        background-image: linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%);
    }
</style>