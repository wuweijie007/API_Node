let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = (req, res, next) => {
    console.log('in findArticleDetailBySn');
    let sn = req.headers['sn']
    sqlQuery(`select list.sn,account.account,list.title,list.url from  wechat_article_list list join wechat_account account on list.__biz = account.__biz
    where list.sn= "${sn}"`)
        .then(data => {
            res.send(resultData('查询成功', 200, data))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}