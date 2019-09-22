var orm = require("../config/orm");

var table = "burgers"
var burger = {
    selectAll: function (cb) {
        orm.selectAll(table, function (res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(table, cols, vals, function(res){
            cb(res)
        });
    },
    updateOne: function(ObjColVals, condition, cb) {
        orm.updateOne(table, ObjColVals, condition, function(res){
            cb(res)
        });
    },
    deleteOne: function(condition, cb) {
        orm.delete(table ,condition, function(res){
            cb(res)
        });
    }
};
module.exports = burger;