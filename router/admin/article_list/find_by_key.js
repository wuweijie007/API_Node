let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    let type = req.headers['type']
    console.log(type);
    sqlQuery(`SELECT art.id,art.title,art.url ,date_format(art.publish_time, '%Y-%m-%d %H:%i:%s') as publish_time,account.type ,art.push_times ,account.account,art.sn FROM wechat_article_list art join wechat_account account 
    on art.__biz = account.__biz
    where account.type= "${type}"
    order by art.publish_time desc;`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}