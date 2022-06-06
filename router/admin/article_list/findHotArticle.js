let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findHotArticle');
    sqlQuery(`select art.sn,art.account,art.title,art.url, art.content_html from wechat_article art join wechat_article_list list on art.sn = list.sn order by list.id desc 
    limit 10`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}