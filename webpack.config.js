/**
 * @FileName:webpack.config.js
 * @Author:fengx
 * @Created date:2017/9/12  13:57
 * @Last Modified by:fengx
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


//
var WEBPACK_ENV=process.env.WEBPACK_ENV||'dev';


//获取html--pllugin参数的方法
var getHtmlConfig=function(name){
    return{
    template:'./src/view/'+name+'.html',
        filename:'view/'+name+'.html',
        inject:true,
        hash:true,
        chunks:['common',name]
    }
}
var config=module.exports = {
    entry: {
        'common':['./src/page/common/index.js'],
        'index':['./src/page/index/index.js'],
        'login':['./src/page/login/index.js']
    },
    output: {
        path: './dist',
        filename: 'js/[name].js',

        //获取资源文件默认的路径，同级目录
        publicPath: '/'

    },
    externals:{
        'jquery':'window.jQuery'
    },
    plugins:[
        //提取独立通用模块到base.js中
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename:'js/base.js'
        }),
        //单独提取css到文件里
        new ExtractTextPlugin("css/[name].css"),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract("style-loader","css-loader")
            },
            {
                test: /\.(gif|png|jpg|woff|svg|eot|ttf|jpeg)\??.*$/,
                loader: 'url-loader?limit=100&name=resource/[name].[ext]',
            }
        ]
    },
    resolve: {
        alias: {
            util: __dirname + '/src/util',
            page: __dirname + '/src/page',
            service: __dirname + '/src/service',
            image: __dirname + '/src/image',

        }
    }

 }
if('dev'===WEBPACK_ENV){
config.entry.common.push('webpack-dev-server/client?http://localhost:8088');
}
 module.exports=config;