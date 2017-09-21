/**
 * Created by fengx on 2017/9/12.
 */


'use strict';
require('./index.css');
// require('./module.js');

require('page/common/nav-simple/index.css');
require('page/common/nav/index.js');
require('page/common/footer/index.js');
var navSide=require('page/common/nav-side/index.js');
require('page/common/header/index.js');

var _ECtools=require('util/tools.js');

navSide.init({name:'about'});
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
// console.log(_ECtools.getServerUrl());
//
// console.log(_ECtools.getUrlParam('test'));
//
// var html='<div>{{data}}</div>';
// var data={
//     data:'test666'
// }
// _ECtools.renderHtml(html,data);
// console.log(_ECtools.renderHtml(html,data));
