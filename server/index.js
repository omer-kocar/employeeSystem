const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeeSystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const country = req.body.country;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees(name, age,position, country, wage ) VALUES (?,?,?,?,?)",
    [name, age, position, country, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query( "SELECT * FROM employees", (err,result) => {
    if(err) {
      console.log(err)
    } else {
      res.send(result);
    }
  })
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
