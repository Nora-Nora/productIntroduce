<template>
    <div class="downSlide">
        <div class="checkBox" @click="listToggle">
            <span>{{ downData[listIndex].title }}</span>
            <div class="sj"></div>
        </div>
        <div class="slideBox">
            <ul v-show="listShow" @click="listHidden">
                <li v-for="(item,index) in downData" @click="getIndex(index)">{{ item.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "downSlide",
        data() {
            return {
                listShow:false,
                listIndex:0
            }
        },
        props: {
            downData: {
                type: Array,
                default: function () {
                    return [
                        {
                            title:'初级产品',
                            value:1
                        },
                        {
                            title:'中级产品',
                            value:2
                        },
                        {
                            title:'高级产品',
                            value:3
                        },
                        {
                            title:'顶级产品',
                            value:4
                        }

                    ]
                }
            }
        },
        methods:{
            listToggle(){
                this.listShow = !this.listShow;
            },
            getIndex(index){
                this.listIndex = index;
                this.$emit("downSlide",this.downData[index].value);
            },
            listHidden(){
                this.listShow = false;
            }
        }
    }
</script>

<style scoped>
    .downSlide .checkBox {
        width: 140px;
        text-align: center;
        border: 1px solid #eee;
        position: relative;
    }

    .sj {
        position: absolute;
        top: 12px;
        right: 10px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 8px solid darkgray;
    }
    .slideBox ul li{
        width: 140px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #eee;
        text-align: center;
        background: #fff;
    }
    .slideBox ul li:hover{
        background: #42b983;
        color: #fff;
        cursor: pointer;
    }
</style>