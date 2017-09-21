/**
 * Created by fengx on 2017/9/20.
 */
'use strict';
require('./index.css');
var $= require('jquery');

var _ECtools=require('util/tools.js');

//通用页面头部
var header={

    init:function () {
        this.bindEvent();
    },
    onload:function () {
        var keyword=_ECtools.getUrlParam('keyword')
        if(keyword){
            $('#search-input').val(keyword);
        }
    },
    bindEvent:function () {
        var _this=this;
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        $('#search-btn').keyup(function (e) {
            //13是回车键
            if(e.keyCode===13){
                _this.searchSubmit();
            };
        });
//搜索提交
    },
    searchSubmit:function () {
        var keyword=$.trim($('#search-input').val());
        if(keyword){
            window.location.href='./list.html?keyword='+keyword;

        }else{
            _ECtools.goHome();
        }

    },
}
header.init();