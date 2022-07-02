var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("college");

db.serialize(function () {
  db.run(
    "CREATE TABLE student (id INT, name TEXT, department TEXT, email TEXT, mobile TEXT, address TEXT)"
  );
});

db.close();
