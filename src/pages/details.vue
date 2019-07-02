<template>
    <div class="details">
        <div class="detailNav">
            <div class="imgBox">
                <img :src="getImg" alt="">
            </div>
            <ul>
                <li v-for="type in types">
                    <router-link active-class="acitve" :to="'/details/'+type.tag">{{ type.title }}</router-link>
                </li>
            </ul>

        </div>
        <div class="detailCont">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "el-details",
        data() {
            return {
                types: [
                    {
                        title: '开放产品',
                        tag: 'earth'
                    },
                    {
                        title: '品牌营销',
                        tag: 'laba'
                    },
                    {
                        title: '使命必达',
                        tag: 'car'
                    },
                    {
                        title: '勇攀高峰',
                        tag: 'mountain'
                    }
                ],
                imgUrl:{
                    '/details/earth':require('../assets/mountain4.png'),
                    '/details/laba':require('../assets/mountain3.png'),
                    '/details/car':require('../assets/mountain2.png'),
                    '/details/mountain':require('../assets/mountain1.png')

                }
            }
        },
        computed:{
            getImg(){
                //获取当前路由地址
                var routeLink = this.$route.path;
                return this.imgUrl[this.$route.path];
            }
        }

    }
</script>

<style scoped>
    .details {
        width: 1200px;
        margin: 20px auto;
        display: flex;
        justify-content: left;
    }

    .details .detailNav {
        width: 230px;
        height: 400px;
        background: #fff;
    }

    .detailNav .imgBox {
        text-align: center;
    }

    .detailNav .imgBox img {
        width: 100px;
        margin: 10px 0;
    }

    .detailNav ul li {
        height: 40px;
        line-height: 40px;
    }
    .detailNav ul li a{
        display: inline-block;
        width: 100%;
        height: 100%;
        padding-left: 20px;
    }

    .detailNav ul li a.acitve {
        color: #fff;
        background: #42b983;
    }

    .detailCont {
        width: 900px;
        margin-left: 30px;
    }
</style>