/**
 * @file 获取诗歌详情
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2017-05-01 19:51:48
 */
var fs = require('fs');
var path = require('path');
module.exports = {
    init: function(app) {
        var me = this;
        console.log(111);
        app.get('/api/indexMeta', function(req, res) {
            var file = path.join(__dirname, '../../data/indexMeta.json');
            console.log(222);
            fs.readFile(file, {encoding: 'utf-8'}, function (err, bytesRead) {
                if (err) {
                    throw err;
                }
                var result = JSON.parse(bytesRead);
                res.send({
                    status: 0,
                    message: '成功',
                    data: result
                });
            });
        });
    }
};