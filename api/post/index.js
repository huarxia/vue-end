/**
 * @file post接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2017-05-01 20:10:23
 */
module.exports = {
    init: function(app) {
    	var saveJson = require('./saveJson');
        saveJson.init(app);
    }
};