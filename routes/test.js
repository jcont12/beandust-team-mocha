const express = require("express");
const router = express.Router();

router.get("/:id", function(req, res) {
  res.render("view.ejs", {
    derp: req.params["id"],
  }); 
});
//get "/test/:id" do 
//  erb "view", locals: {derp: parmas[:id]}
//end

router.get("*", function(req,res) {
  res.send("You hit the test catchall, trying to hit /test" + req.url);
});

module.exports = router;