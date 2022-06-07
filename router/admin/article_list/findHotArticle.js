let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findHotArticle');
    sqlQuery(`select account.account,list.title,list.url, list.publish_time,list.sn from  wechat_article_list list join wechat_account account on list.__biz = account.__biz
    order by list.publish_time desc 
    limit 10`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}