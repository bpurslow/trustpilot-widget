"use strict";var webpack=require("webpack"),path=require("path"),nodeModules={};module.exports={name:"server",target:"node",entry:"./server/serverEntry.js",output:{path:"./bin/",publicPath:"bin/",filename:"serverEntry.js"},externals:nodeModules,module:{loaders:[{test:/\.js$/,loaders:["babel-loader"]},{test:/\.json$/,loader:"json-loader"}]}};