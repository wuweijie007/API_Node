let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findHotArticle');
    sqlQuery(`select list.id,list.title,list.url, list.publish_time,list.msg_type,list.srcId from chain_msg_list list 
    order by str_to_date(list.publish_time, '%Y-%m-%d %H:%i:%S') desc 
    limit 10`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}