const dayjs = require('dayjs')
let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('searchEverydaySaying');
    let currentDate = dayjs().format('YYYY-MM-DD');
    sqlQuery(`select content from everyday where publish_time = '${currentDate}'`)
        .then(data => res.send(resultData('查询成功', 200, data)))

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}