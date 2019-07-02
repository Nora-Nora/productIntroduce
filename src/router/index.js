import Vue from 'vue'
import Router from 'vue-router'
import layout from '../pages/layout'
import details from '../pages/details'
import car from '../pages/car'
import earth from '../pages/earth'
import laba from '../pages/laba'
import mountain from '../pages/mountain'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: layout
        },
        {
            path:'/details',
            name:'details',
            component:details,
            redirect:'/details/earth',
            children:[
                {
                    path: 'car',
                    name: 'car',
                    component: car
                },
                {
                    path: 'earth',
                    name: 'earth',
                    component: earth
                },
                {
                    path: 'laba',
                    name: 'laba',
                    component: laba
                },
                {
                    path: 'mountain',
                    name: 'mountain',
                    component: mountain
                }
            ]
        }
    ]
})
