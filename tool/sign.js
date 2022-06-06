var crypto = require('crypto');

let { token_config } = require('../config/default')



var Sign = function () {
    var timestamp = new Date().getTime();
    var message = token_config.appkey + "app_key" + "timestamp" + timestamp + token_config.appSecret;
    var sign = SignByHmacMd5(message, token_config.appSecret);
    return{
        timestamp:timestamp,
        sign:sign
    }
 }

var SignByHmacMd5 = function (message, secret) {
    var hmac = crypto.createHmac("md5", secret);
    var result= hmac.update(message).digest('hex');
    return result;
}

exports.SignTaobao=Sign;

console.log(token_config)
console.log(Sign())