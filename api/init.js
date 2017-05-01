/**
 * @file 接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2017-05-01 19:50:13
 */
module.exports = {
    init: function(app) {
        var get = require('./get/');
        var post = require('./post/');
        get.init(app);
        post.init(app);
    }
};