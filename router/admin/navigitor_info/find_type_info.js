let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')


module.exports = (req, res, next) => {
    console.log('来到了"/navitigor"中间件');
    sqlQuery('select type_code,type_name from artile_type_info')
        .then(data => res.send(resultData('查询成功', 200, data)))
        .catch(err => {
            console.log(err);
            next('查询导航栏分类失败')
        })
}