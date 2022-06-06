const jwt = require('jsonwebtoken')
const singnKey = 'zgs_first_token';  //签名
let { sqlQuery } = require('../model/dataBase')

//登录接口 生成token的方法
function setToken(user_name) {
    // { user_name: user_name, user_id: user_id } 传入需要解析的值（ 一般为用户名，用户id 等）
    const token = jwt.sign(
        { name: user_name },
        singnKey,
        { expiresIn: '1h' }  //expiresln 设置token过期的时间
    );
    return token
}
//各个接口需要验证token的方法
function verify_Token(appid,token) {
    return new Promise((resolve, reject) => {
        sqlQuery(`select appsecret from user_token where appkey = '${appid}'`) 
        .then(data =>{
            if(data.length != 0 && data[0]['appsecret'] == token){
                resolve(data)
            }else{
               reject(err)
            }
            }
        )
    })
}

module.exports = {
    setToken,
    verify_Token
}