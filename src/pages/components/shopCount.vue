<template>
    <div class="countBox">
        <div class="decrease" @click="decrease">-</div>
        <input type="number" v-model="num" @keyup="fixInput">
        <div class="add" @click="add">+</div>
    </div>
</template>

<script>
    export default {
        name: "shopCount",
        data() {
            return {
                num: 1
            }
        },
        props: {
            min: {
                type: Number,
                default: 1
            },
            max:{
                type:Number,
                default:5
            }
        },
        methods: {
            add() {
                if(this.num>=this.max){
                    this.num = this.max;
                }else{
                    this.num++;
                }
                this.$emit('count',this.num);
            },
            decrease() {
                if(this.num<=this.min){
                    this.num = this.min;
                }else{
                    this.num--;
                }
                this.$emit('count',this.num);
            },
            fixInput(){
                if(this.num<this.min || this.num>this.max){
                    this.num = this.min;
                }
                this.$emit('count',this.num);
            }
        }
    }
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    .countBox {
        display: flex;
        justify-content: left;
    }

    .countBox input[type=number] {
        width: 40px;
        height: 40px;
        border: 1px solid #eee;
        text-align: center;
    }

    .decrease, .add {
        width: 40px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #eee;
        text-align: center;
        background: #fff;
        cursor: pointer;
    }
</style>