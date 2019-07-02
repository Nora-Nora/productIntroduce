<template>
    <div class="homeContain">
        <div class="homeLeft">
            <div class="part1">
                <p class="title">全部产品</p>
                <div class="productList">
                    <div v-for="(product,index) in products" class="productItem">
                        <h4>{{ product.category }}</h4>
                        <ul>
                            <li v-for="(item) in product.list">
                                <a target="_blank" :href="item.url">{{ item.title }}
                                    <div class="hot" v-if="item.hot">HOT</div>
                                </a>
                            </li>
                        </ul>
                        <div class="hr" v-if="index!==products.length-1"></div>
                    </div>
                </div>
            </div>
            <div class="part2">
                <p class="title">最新豆瓣电影</p>
                <div class="productList">
                    <div class="productItem">
                        <ul>
                            <li v-for="(item,index) in news" v-if="index<12">
                                <a target="_blank" :href="item.id">{{ item.title }}
                                </a>
                                <span>评分：{{ item.rating }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="homeRight">
            <div class="part1">
                <swiper :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide>
                        <img src="../assets/scroll1.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/scroll2.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/scroll3.png" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/scroll4.png" alt="">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="part2">
                <ul>
                    <li v-for="type in types">
                        <div class="cont">
                            <div class="name">{{ type.title }}</div>
                            <div class="describe">{{ type.discribe }}</div>
                            <div class="button">
                                <router-link :to="'/details/'+type.tag">立即购买</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true, // 循环模式选项
                    autoplay: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }

                },
                news: [],
                products: [
                    {
                        category: '手机应用类',
                        list: [
                            {
                                title: '91助手',
                                url: 'https:www.baidu.com',
                                hot: false
                            },
                            {
                                title: '豌豆荚',
                                url: 'https:www.baidu.com',
                                hot: true
                            },
                            {
                                title: '金山毒霸',
                                url: 'https:www.baidu.com',
                                hot: false
                            }
                        ]
                    },
                    {
                        category: 'pc产品',
                        list: [
                            {
                                title: 'webstrom',
                                url: 'https:www.baidu.com',
                                hot: true
                            },
                            {
                                title: 'phpstrom',
                                url: 'https:www.baidu.com',
                                hot: false
                            },
                            {
                                title: 'sublime',
                                url: 'https:www.baidu.com',
                                hot: false
                            },
                            {
                                title: 'Hbuild',
                                url: 'https:www.baidu.com',
                                hot: false
                            }
                        ]
                    }
                ],
                types: [
                    {
                        title: '开放产品',
                        discribe: '开放产品的描述介绍',
                        tag: 'earth'
                    },
                    {
                        title: '品牌营销',
                        discribe: '品牌营销的描述介绍',
                        tag: 'laba'
                    },
                    {
                        title: '使命必达',
                        discribe: '使命必达的描述介绍',
                        tag: 'car'
                    },
                    {
                        title: '勇攀高峰',
                        discribe: '勇攀高峰的描述介绍',
                        tag: 'mountain'
                    }
                ]
            }
        },
        created() {
            var url = this.HOST + '/v2/movie/coming';
            this.$axios.get(url, {
                params: {
                    apikey: '0df993c66c0c636e29ecbb5344252a4a'
                }
            }).then(res => {
                this.news = res.data.entries;
            }).catch(error => {
                console.log(error);
            });
        }

    }
</script>
<style scoped>
    .homeContain {
        width: 1200px;
        margin: 20px auto;
        display: flex;
        justify-content: left;
    }

    .homeLeft .part1, .homeLeft .part2 {
        width: 240px;
        box-shadow: 5px 5px 10px #888888;
        height: 400px;
        background: #fff;
    }

    .homeLeft .part2 {
        margin-top: 30px;
    }

    .homeLeft .part1 ul li, .homeLeft .part2 ul li {
        padding-bottom: 5px;
    }

    .homeLeft .title {
        padding: 5px;
        background: #42b983;
        color: #fff;
    }

    .productList ul {
        padding: 10px 0;
    }

    .productList ul li a {
        position: relative;
    }

    .productList ul li a .hot {
        width: 30px;
        text-align: center;
        background: red;
        color: aliceblue;
        font-size: 10px;
        position: absolute;
        top: 4px;
        right: -35px;
    }

    .productList .hr {
        height: 1px;
        background: #e1e1e1e1;
        width: 95%;
        margin: 0 auto;
    }

    .productItem {
        padding: 10px;
    }

    .homeRight {
        margin-left: 30px;
        width: 950px;
        overflow: hidden;
    }

    .homeRight .part1 {
        height: 400px;
    }

    .homeRight .part2 {
        margin-top: 30px;
    }

    .homeRight .swiper-slide img {
        width: 100%;
        height: 400px;
    }

    .homeRight .part2 ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .homeRight .part2 ul li {
        width: 455px;
        background: #fff;
        height: 190px;
        margin-bottom: 20px;
    }

    .homeRight .part2 .cont {
        padding-left: 200px;
        padding-top: 50px;
    }

    .homeRight .part2 ul li:nth-child(1) {
        background: url("../assets/mountain4.png") #fff no-repeat 50px 30px;
        background-size: 90px;
    }

    .homeRight .part2 ul li:nth-child(2) {
        background: url("../assets/mountain3.png") #fff no-repeat 50px 30px;
        background-size: 90px;
    }

    .homeRight .part2 ul li:nth-child(3) {
        background: url("../assets/mountain2.png") #fff no-repeat 50px 30px;
        background-size: 90px;
    }

    .homeRight .part2 ul li:nth-child(4) {
        background: url("../assets/mountain1.png") #fff no-repeat 50px 30px;
        background-size: 90px;
    }

    .homeRight .part2 .cont div {
        padding-bottom: 10px;
    }

    .homeRight .part2 .cont .button {
        width: 80px;
        text-align: center;
        background: #42b983;
        padding: 5px 0;
    }

    .homeRight .part2 .cont .button a {
        color: #fff;
    }

</style>