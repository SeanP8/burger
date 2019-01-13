let connection = require("../config/connection");

// function printQuestionMarks(num) {
//   let arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// }

// function objToSql(ob) {
//   let arr = [];

//   for (var key in ob) {
//     let value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }

//   return arr.toString();
// }

const orm = {
  all: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  create: function(table, val, cb) {
    // let queryString = "INSERT INTO " + table;
    // queryString += " (";
    // queryString += cols.toString();
    // queryString += ") ";
    // queryString += "VALUES (";
    // queryString += printQuestionMarks(vals.length);
    // queryString += ") ";

    // console.log(queryString);

    // connection.query(queryString, vals, function(err, data) {
    //   if (err) throw err;
    //   cb(data);
    connection.query(
      "INSERT INTO " + table + " (burger_name) VALUES ('" + val + "');",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  update: function(table, condition, cb) {
    // let queryString = "UPDATE " + table;
    // queryString += " SET ";
    // queryString += objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;

    // console.log(queryString);
    console.log("ORM table", table);
    console.log("ORM condition", condition);
    let query =
      "UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";";
    console.log("ORM query ", query);
    connection.query(query, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  },
  delete: function(table, condition, cb) {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, data) {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
