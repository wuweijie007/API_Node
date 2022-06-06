let { sqlQuery } = require('../../../model/dataBase')
let { resultData } = require('../../../tool/resultData')

module.exports = async(req, res, next) => {
    console.log('in searchArticle');
    let { pageNum, pageSize, key } = req.body
    console.log(pageNum, pageSize, key);
    let totalNum = await sqlQuery(`select count(*) as totalNum 
    from  wechat_article_list article join wechat_account account on article.__biz = account.__biz 
    where article.title like "%${key}%" `)

    let sqlStr=`select article.id,article.title,article.url,date_format(article.publish_time, '%Y-%m-%d %H:%i:%s') as publish_time,article.sn, article.__biz,account.account
        from wechat_article_list article join wechat_account account on article.__biz = account.__biz
        where article.title like '%${key}%'
        ORDER BY article.publish_time desc,article.id desc
        limit ${(pageNum -1) * pageSize},${pageSize}
        `
    
    sqlQuery(sqlStr)
        .then(data => {
            res.send(resultData('查询成功', 200, {totalNum,data}))
        })

        .catch(err => {
            console.log(err);
            next('查询失败')
        })
}
