function createStudent(student) {
  var sqlite3 = require("sqlite3").verbose();
  var file = "college";
  var db = new sqlite3.Database(file);
  var stmt = db.prepare("INSERT INTO student VALUES (?,?,?,?,?,?)");
  stmt.run(
    getRandomInt(10, 100),
    student.name,
    student.department,
    student.email,
    student.mobile,
    student.address
  );
  stmt.finalize();
  db.close();
}

function getStudent(sendData) {
  var sqlite3 = require("sqlite3").verbose();
  var file = "college";
  var db = new sqlite3.Database(file);
  db.all(
    "SELECT name, department, email, mobile, address FROM student",
    function (err, rows) {
      sendData(rows);
    }
  );
  db.close();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getStudent,
  createStudent,
};
