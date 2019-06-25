import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './Index'
import routes from '../../router';
import util from './../../assets/js/util';
import store from './../../store/index';
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element);
require('../../assets/js/ydui.flexible.js');
require('./../../assets/scss/public.scss');
Vue.prototype.util = util;       //把方法挂到vue下面
Vue.use(VueRouter);
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
let vm=new Vue({
    el: '#app',
    router: router,
    store:store,
    template: '<App/>',
    components: {App}
})
function getUrlKey(name){
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
 }
 let token=getUrlKey('token');
if(token){
    vm.$store.commit('upToken',token);
}