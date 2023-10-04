var data = require('../fn/mysql-db');
var date = new Date();

exports.LoadPage = function(page){
    var offset = (page-1)*8;
    var sql = `select * from product order by TimeUp DESC limit ${offset},8`;

    return data.load(sql);
}
exports.AddProduct = function(pd) {
    var sql = `INSERT INTO product (Id, ProductName, PriceNow, PricePay, TimeUp, Cost, Status, TurnPay, Detail) VALUES ('${pd.Id}','${pd.ProductName}' ,'${pd.PriceNow}','${pd.PricePay}', NOW(),'${pd.Cost}','${pd.Status}','${pd.TurnPay}','${pd.Detail}') `;

    return data.insert(sql);
}
exports.GetImage = function (id) {
    var sql = ` select * from image where IdProduct = '${id}'`

    return data.load(sql);
}
exports.GetCategoryFromProduct = function (id) {
    var sql = `select * from product where id_category = '${id}' limit 0,4`
    return data.load(sql)
}
exports.load = function(Id) {
    var sql = `select * from product  where Id = '${Id}'`
    return data.load(sql)
}
exports.SearchNameProduct = function(name) {
    var sql = `select * from product where ProductName like '%${name}%'`;

    return data.load(sql);
}