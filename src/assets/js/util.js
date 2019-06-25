/**
 * Created by zhangbin on 2017/7/6.
 */
import axios from 'axios';
import common from './../common/common';
import interfaces from './interfaces';
import $ from 'jquery';
export default {
    request(option){
        var _self = this;
        let method = option.method ? option.method : 'get';
        let putData = {
            url: interfaces.interfaces.domain + interfaces.interfaces[option.interface],
            method: method,
            headers: {}
        }
        if (option.interfaceFn) {
            putData.url = option.interfaceFn(interfaces.interfaces.domain + interfaces.interfaces[option.interface]);
        }
        if (option.typeData == 'json') {
            putData.headers['content-type'] = "application/json";
        }
        if (method == 'get' || method == 'delete') {
            putData.params = option.data;
        } else if (method == 'post') {
            putData.data = option.data;
        } else {
            putData.data = option.data;
        }
        /**
         * 请求拦截：在请求之前执行 比如loading处理
         * */
        return new Promise((resolve, reject) => {
            axios.interceptors.request.use(function (config) {
                common.loading();
                return config;
            })
            /**
             * 请求完成后执行
             * */
            axios.interceptors.response.use(function (response) {
                common.removeLoading();
                return response;
            });
            axios(putData).then(res => {
                resolve({
                    status: 0,
                    result: res.data
                })
            }).catch((res) => {
                common.removeLoading();
                if (!option.isHandle) {
                    if (res.request.status - 0 === 401) {
                        this.upToken()
                    }
                }
                reject('error');
            });
        });

    },
    upload(option){
        var _self = this;
        let file=option.files[0];
        let param = new FormData()
        param.append('image',file)
        let config={
            headers:{'Content-Type':'multipart/form-data'}
        }
        let inter=interfaces.interfaces.domain + interfaces.interfaces[option.interface];
        common.loading();
        return new Promise((resolve, reject) => {
            axios.post(inter,param,config).then(res=>{
                resolve({
                    status: 0,
                    result: res.data
                })
                common.removeLoading();
            }).catch(err=>{
                reject('error');
                common.removeLoading();
            })
        });
    }
};
