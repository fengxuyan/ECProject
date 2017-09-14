/**
 * Created by fengx on 2017/9/12.
 */


'use strict';
require('./index.css');
require('../login/module.js');

var _ECtools=require('util/tools.js');


// _ECtools.request({
//     url:'/product/list.do?keyword=1',
//     success:function(res){
//         console.log(res);
//         console.log('res success');
//     },
//     error:function(err){
//         console.log(err);
//         console.log('res error');
//     }
// });
console.log(_ECtools.getServerUrl());

console.log(_ECtools.getUrlParam('test'));

var html='<div>{{data}}</div>';
var data={
    data:'test666'
}
_ECtools.renderHtml(html,data);
console.log(_ECtools.renderHtml(html,data));
