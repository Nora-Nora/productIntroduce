<template>
    <div class="goodsPrice">
        {{ goodsPrice }}元
    </div>
</template>

<script>
    export default {
        name: "goodsPrice",
        data(){
            return{

            }
        },
        props:{
            goodsPrice:{
                type:Number,
                default:0
            }
        }
    }
</script>

<style scoped>
</style>