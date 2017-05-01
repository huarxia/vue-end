/**
 * @file get接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2017-05-01 19:50:48
 */
module.exports = {
    init: function(app) {
        var getIndexMeta = require('./getIndexMeta');
        getIndexMeta.init(app);
    }
};
