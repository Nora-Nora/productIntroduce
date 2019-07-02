<template>
    <div class="timeBox">
        <ul>
            <li v-for="(item,index) in timeList" :class="{'active':index==timeIndex}" @click="addActive(index)">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "timeList",
        data(){
            return{
                timeIndex:0
            }
        },
        methods:{
            addActive(index){
                this.timeIndex = index;
                this.$emit('times',this.timeList[index].value);

            }
        },
        props:{
            timeList:{
                type:Array,
                default:function () {
                    return [
                        {
                            title:'一个月',
                            value:1
                        },
                        {
                            title:'三个月',
                            value:3
                        },
                        {
                            title:'半年',
                            value:6
                        },
                        {
                            title:'全年',
                            value:12
                        }

                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .timeBox ul{
        width: 400px;
        height: 30px;
        display: flex;
        justify-content: space-between;
    }
    .timeBox ul li{
        border: 1px solid #eee;
        width: 90px;
        text-align: center;
        line-height: 30px;
    }
    .timeBox ul li.active{
        background:#42b983;
        color: #fff;
    }
</style>