/**
 * Created by fengx on 2017/9/13.
 */
'use strict';

var Hogan=require('hogan.js');
console.log(Hogan);
var conf= {
    ServerHost:'',
}
var _ECtools={

    request:function (param) {
        var _this=this;
        $.ajax({
            type:param.method||'get',
            url:param.url||'',
            dataType:param.type||'json',
            data:param.data||'',
            success:function(res){
                //请求成功并且返回正确的数据
                if(0===res.status){
                    typeof param.success==='function'&&param.success(res.data,res.msg);
                }
                //需要强制登录
                else if(10===res.status){
                    _this.doLogin();
                }
                //请求数据错误
                else if(1===res.status){
                    typeof param.error==='function'&&param.error(res.msg)
                }
            },
            error:function(err){
                    typeof param.error==='function'&&param.error(err.statusText);
            }
        })
    },
    doLogin:function(){
        window.location.href='./login.html?redirect='+encodeURIComponent(window.location.href);

    },
    goHome:function () {
        window.location.href='./index.html';
    },
    //获取服务器地址
    getServerUrl:function(path){
        return conf.ServerHost+path;
    },
    //获取url地址参数
    getUrlParam:function(name){
        var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
        var result=window.location.search.substr(1).match(reg);
        return result? decodeURIComponent(result[2]):null;
    },
    //渲染HTML模板
    renderHtml:function(htmlTemplate,data){
        var template=Hogan.compile(htmlTemplate),
            render=template.render(data);
        return render;
    },
    //成功提示
    successTips:function (msg) {
        alert(msg||'操作成功');
    },
    //成功提示
    errorTips:function (msg) {
        alert(msg||'出现错误');
    },
    validate:function (value,type) {
        var value=$.trim(value);
        if('require'===type){
            return !!value;
        };
        if('phone'===type){

            return /^1\d{10}$/.test(value);
        };
        if('email'===type){
            return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
        };
    },

}

module.exports=_ECtools;