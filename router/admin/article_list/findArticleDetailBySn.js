let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findArticleDetailBySn');
    let sn = req.headers['sn']
    sqlQuery(`select art.sn,art.account,art.title,art.url, art.content_html from wechat_article art join wechat_article_list list on art.sn = list.sn 
    where art.sn= "${sn}"`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}