let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    let type = req.headers['type']
    console.log(type);
    sqlQuery(`SELECT art.id,art.title,art.url ,art.publish_time ,art.msg_type,art.srcId FROM chain_msg_list art join chain_msg_type account 
    on art.msg_type = account.type_code
    where account.type_code = "${type}"
    order by art.publish_time desc
    limit 100;`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}
