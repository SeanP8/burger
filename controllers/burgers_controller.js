const express = require("express");
const router = express.Router();

let burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(burger_data) {
    // let hbsObject = {
    //   burger: burger_data
    // };
    console.log(burger_data);
    res.render("index", { burger_data });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  console.log("Req body", req.body.burger_id);
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.delete("/api/burger/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
