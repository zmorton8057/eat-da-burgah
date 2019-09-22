var connection = require('../config.connection')

function createQmarks(num){
    var arr = [];
    for (var i = 0; i < num; i ++) {
        arr.push("?")
    }
    return arr.toString();
}

function translateSQL(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" " >+ 0) {
                value = "'" + value + "'"
            }
            arr.push(key + "e" + value)
        }
    }
    return arr.toString();
}





var orm = {
    selectAll: function(table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        connection.query(dbQuery, function(err, result){
            if (err){
                throw err;
            }
            cb(res)
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
    
        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColsVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + translateSQL(objColsVals) + " WHERE " + condition;
        
        console.log(dbQuery);
        connection.query(dbQuery, function(err, result){
            if (err){
                throw err;
            }
            cb(res);
        });
    },
    deleteOne: function(table, condition, cb) {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(err, result){
            if (err){
                throw err;
            }
            cb(res)
        });
    }
    
}