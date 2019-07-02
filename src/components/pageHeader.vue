<template>
    <div class="header">
        <div class="header-contain">
            <div class="logo">
                <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
                <span>这是一个网站的介绍...</span>
            </div>
            <div class="detail">
                <ul>
                    <li><router-link to="/">登录</router-link></li>
                    <li>|</li>
                    <li><router-link to="/">注册</router-link></li>
                    <li>|</li>
                    <li><router-link to="/">关于</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pageHearer"
    }
</script>

<style scoped>
    .header{
        background: #363636;
    }
    .header .header-contain{
        width: 80%;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
    }
    .detail ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        align-items: center;
        height: 100%;
    }
    .detail ul li{
        padding: 4px;
        color: #adadad;
    }
    .detail ul li a{
        color: #adadad;
    }
    .detail ul li a:hover{
        color: #42b983;
    }
    .header .logo img{
        width: 60px;
        vertical-align:middle;
    }
    .header .logo span{
        color: #adadad;
    }

</style>