const epxress = require('express')

// 创建二级路由
const apiV1 = epxress.Router()


// -------------------- 货物相关接口 ------------------------------
// 货物_查询
apiV1.get('/cargo/info', require('./cargo_info/find_info'))

// 货物_新增
apiV1.post('/cargo/info', require('./cargo_info/add_info'))

// 货物_修改
apiV1.put('/cargo/info/:id', require('./cargo_info/modify_info'))

// 货物_删除
apiV1.delete('/cargo/info/:id', require('./cargo_info/delete_info'))

// 货物_查询 by id
apiV1.get('/cargo/info/:id', require('./cargo_info/find_info_by_id'))

// 货物_查询 by key
apiV1.get('/cargo/info_key', require('./cargo_info/find_info_by_key'))


// ------------------------- 订单接口 ---------------------------
// 订单_查询
apiV1.get('/order/find', require('./order_list/find'))

// 订单_查询 by key
apiV1.get('/order_find_key', require('./order_list/find_by_key'))



// --------------------  设备相关接口 -----------------------------
// 设备_查询
apiV1.get('/facility/info', require('./facility_info/find_info'))

// 设备_新增
apiV1.post('/facility/info', require('./facility_info/add_info'))

// 设备_修改
apiV1.put('/facility/info/:id', require('./facility_info/modify_info'))

// 设备_删除
apiV1.delete('/facility/info/:id', require('./facility_info/delete_info'))

// 设备_查询 by id
apiV1.get('/facility/info/:id', require('./facility_info/find_info_by_id'))

// 设备_查询 by key
apiV1.get('/facility/info_key', require('./facility_info/find_info_by_key'))

// --------------------  分类导航相关接口 -----------------------------
apiV1.post('/api/navi/typeinfo', require('./navigitor_info/find_type_info'))

// --------------------  分类导航相关接口 -----------------------------
apiV1.post('/api/article/list_key', require('./article_list/find_by_key'))
apiV1.post('/api/article/detail', require('./article_list/findArticleDetailBySn'))
apiV1.post('/api/article/hot', require('./article_list/findHotArticle'))
apiV1.post('/api/article/search', require('./article_list/searchArticle'))


module.exports = {
    apiV1
}


