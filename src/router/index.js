import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const Login = ()=>import('../pages/login/login.vue')
const Activity = ()=>import('../pages/activity/activity.vue')
const Notice = ()=>import('../pages/notice/notice.vue')
const Headline = ()=>import('../pages/headline/headline.vue')
const Journalism = ()=>import('../pages/journalism/journalism.vue')
const OrderDetails = ()=> import('../pages/orderDetails/orderDetails.vue')
const DliverGoods = ()=> import('../pages/dliverGoods/dliverGoods.vue')
const Consignee = ()=> import('../pages/consignee/consignee.vue')
const NewReservation = ()=> import('../pages/newReservation/newReservation.vue')

export default [
    {
        path:'/',
        name:'Activity',
        component:Activity
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:"/notice",
        name:Notice,
        component:Notice
    },
    {
        path:"/headline",
        name:"Headline",
        component:Headline
    },
    {
        path:"/journalism",
        name:"Journalism",
        component:Journalism
    },
    {
        path:"/orderDetails",
        name:"OrderDetails",
        component:OrderDetails
    },
    {
        path:"/dliverGoods",
        name:"DliverGoods",
        component:DliverGoods
    },
    {
        path:"/consignee",
        name:"Consignee",
        component:Consignee
    },
    {
        path:"/newReservation",
        name:"NewReservation",
        component:NewReservation
    }
]
