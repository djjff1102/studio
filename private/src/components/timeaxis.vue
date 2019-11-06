<template>
    <div class="timeaxis">
        <h3>TIME LINE</h3>
        <ul>
            <li>
                <div class="content">
                    <img src="@/assets/birds-4597923__340.jpg" alt="">
                    <div class="text">
                        <h3>第一章</h3>
                        <p>发布业界首个基于3GPP标准的端到端全系列5G商用产品与解决方案，和全球182家运营商开展5G测试，签定30多个5G商用合同，40,000多个5G基站已发往世界各地。</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="content">
                    <img src="@/assets/birds-4597923__340.jpg" alt="">
                    <div class="text">
                        <h3>第一章</h3>
                        <p>发布业界首个基于3GPP标准的端到端全系列5G商用产品与解决方案，和全球182家运营商开展5G测试，签定30多个5G商用合同，40,000多个5G基站已发往世界各地。</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="content">
                    <img src="@/assets/birds-4597923__340.jpg" alt="">
                    <div class="text">
                        <h3>第一章</h3>
                        <p>发布业界首个基于3GPP标准的端到端全系列5G商用产品与解决方案，和全球182家运营商开展5G测试，签定30多个5G商用合同，40,000多个5G基站已发往世界各地。</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="content">
                    <img src="@/assets/birds-4597923__340.jpg" alt="">
                    <div class="text">
                        <h3>第一章</h3>
                        <p>发布业界首个基于3GPP标准的端到端全系列5G商用产品与解决方案，和全球182家运营商开展5G测试，签定30多个5G商用合同，40,000多个5G基站已发往世界各地。</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="content">
                    <img src="@/assets/birds-4597923__340.jpg" alt="">
                    <div class="text">
                        <h3>第一章</h3>
                        <p>发布业界首个基于3GPP标准的端到端全系列5G商用产品与解决方案，和全球182家运营商开展5G测试，签定30多个5G商用合同，40,000多个5G基站已发往世界各地。</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'timeaxis',
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .timeaxis{
        padding-top: 80px;
        min-width: 900px;
        background-image: linear-gradient( 135deg, #FAB2FF 10%, #1904E5 100%);
        padding-bottom: 100px;
    }
    .timeaxis>h3{
        width: 100%;
        height: 200px;
        line-height: 200px;
        text-align: center;
    }
    li{
        width: 5px;
        background-color: black;
        margin: 0 auto;
        padding-bottom: 10px;
    }
    .content{
        width: 450px;
        height: 300px;
        padding: 10px;
        background-color: azure;
        position: relative;
        left: 20px;
    }
    li:nth-child(odd)::before,
    li:nth-child(even)::before{
        content: '';
        width: 0;
        border-left: 10px solid black;
        border-top: 0px solid black;
        border-right: 12px solid black;
        border-radius: 50%;
        top: 23px;
        right: 9px;
        position: relative;
    }
    li:nth-child(odd) .content::before,
    li:nth-child(even) .content::after{
        position: absolute;
        content: '';
        width: 0px;
        border-right: 10px solid black;
        border-left:  10px solid black;
        border-top: 5px solid black;
    }
    li:nth-child(even) .content::after{
        right: -20px;
    }
    li:nth-child(odd) .content::before{
        left: -20px;
    }
    .content:hover img{
        height: 0;
    }
    .content:hover .text{
        display: block;
    }
    .content .text{
        display: none;
    }
    .content img{
        width: 100%;
    }
    ul li:nth-child(even) .content{
        left: -485px;
    }
</style>