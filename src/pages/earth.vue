<template>
    <div class="earth">
        <div class="title">earth</div>
        <div class="goodsBox">
            <p>购买数量：</p><count :min="min" :max="max" @count="getGoodsInfor('count',$event)" />
        </div>
        <div class="goodsBox">
            <p>产品类型：</p><downSlide :downData="downData" @downSlide="getGoodsInfor('downSlide',$event)" />
        </div>
        <div class="goodsBox">
            <p>有效时间：</p><timeList :timeList="timeList" @times="getGoodsInfor('times',$event)" />
        </div>
        <div class="goodsBox">
            <p>总价：</p><goodsPrice :goodsPrice="getPrice" />
        </div>
        <div class="goodsBox">
            <div class="button" @click="alertMag">立即购买</div>
        </div>


    </div>
</template>

<script>
    import goodsPrice from './components/goodsPrice'
    import count from './components/shopCount'
    import downSlide from './components/downSlide'
    import timeList from './components/timeList'
    export default {
        name: "earth",
        components:{
            count,
            downSlide,
            timeList,
            goodsPrice
        },
        data(){
            return{
                // downData:[
                //     {
                //         title:'产品类型1',
                //         value:0
                //     }
                // ],
                // timeList:[
                //     {
                //         title:'四个月',
                //         value:4
                //     }
                // ],
                max:10,
                min:1,
                count:1,
                downSlide:1,
                times:1,
                goodsPrice:0
            }
        },
        methods:{
            // getDownSlide(data){
            //     console.log(data);
            // },
            // getCount(data){
            //     console.log(data);
            // },
            // getTime(data){
            //     console.log(data);
            // }
            getGoodsInfor(key,value){
                this[key] = value;
                var goodsInfor = {
                    'count': this.count,
                    'downSlide':this.downSlide,
                    'time':this.times
                };
                // console.log(goodsInfor);
                // this.goodsPrice = goodsInfor.count*goodsInfor.downSlide*goodsInfor.time*10;

            },
            alertMag(){
                alert("购买成功");
            }

        },
        computed:{
            getPrice(){
                return this.count*this.downSlide*this.times*10;
            }
        }
    }
</script>

<style scoped>
    .earth{
        width: 800px;
        height: 600px;
        background: #fff;
        padding: 20px;
    }
    .goodsBox{
        display: flex;
        justify-content: left;
        margin-bottom: 20px;
        line-height: 40px;
    }
    .goodsBox p{
        padding-right: 20px;
    }
    .goodsBox .button{
        background: #42b983;
        color: #fff;
        width: 100px;
        text-align: center;
        border-radius: 5px;
    }
</style>