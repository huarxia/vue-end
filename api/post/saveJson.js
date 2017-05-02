/**
 * @file 保存组件配置
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2017-05-01 19:51:48
 */
var fs = require('fs');
var path = require('path');
module.exports = {
    init: function(app) {
        var me = this;
        app.post('/api/saveJson', function(req, res) {
            var data = JSON.stringify(req.body);
            var file = path.join(__dirname, '../../data/indexMeta.json');
            fs.writeFile(file, data, 'utf8', function(){
                // 保存完成后的回调函数
                console.log("保存完成");
                res.send({
                    status: 0,
                    message: '保存成功',
                    data: []
                });
                res.end();
            });
        });
    }
};