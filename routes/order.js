const express = require("express");
const router = express.Router();
const initOptions = {}
const pgp = require('pg-promise')(initOptions)
const cn = {
  host: "127.0.0.1",
  port: 5432,
  database: "beandust",
  user: "apprentice",
  password: ""
}
const db=pgp(cn)

router.get("/:id", function(req, res) {
  db.query("SELECT * FROM Orders")
    .then((data) => {})
    .catch((error) => console.log(error));
  res.sendFile("test.html",{ root: __dirname + '/../views' });
});

router.post("*", function(req, res) {
  console.log("Post handler");
  confirmation_number = (Math.floor(Math.random() * 1000000)).toString();
  console.log(confirmation_number, req.body);
  console.log("*****************");
  db.query("INSERT INTO Orders(user_id, item, quantity, description, confirmation_number, price, createdAt, updatedAt) VALUES (" + req.body.user_id + ", '" + req.body.item + "', " + req.body.quantity + ", '" + req.body.description + "', '" + confirmation_number + "', '" + req.body.price + "', current_timestamp, current_timestamp);");
});

module.exports = router;
