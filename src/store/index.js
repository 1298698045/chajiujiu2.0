import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        token:'',
        code:'',
        HanderTitle: '',
        saveTitle:''
    },
    mutations:{
        upToken(state,token){
            state.token=token;
        },
        upCode(state,code){
            state.code=code;
        },
        upTitle(state,HanderTitle){
            state.HanderTitle = HanderTitle;
        }
    }
})
