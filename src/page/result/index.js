/**
 * Created by fengx on 2017/9/20.
 */
'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');



var _ECTools=require('util/tools.js');
//显示对应的操作结果提示
$(function () {
    var type=_ECTools.getUrlParam('type'),
        $element=$('.'+type+'-success');
        $element.show();
});