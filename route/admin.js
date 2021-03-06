//  引用express框架
const express = require('express');
//  创建博客管理页面路由
const admin = express.Router();

admin.get('/login', (req, res) => {
    // res.end('Hello');
    res.render('admin/login');
    // console.log('正在登录');
})

//  将路由对象作为模块成员进行导出
module.exports = admin;
