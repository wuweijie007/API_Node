let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findArticleDetailBySn');
    console.log(req.connection.remoteAddress)
    let sn = req.headers['sn']
    sqlQuery(`select list.id,list.title,list.publish_time,list.url,list.srcId from  chain_msg_list list 
    where list.srcId= "${sn}"`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}