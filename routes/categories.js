const express = require("express");
const router = express.Router();
const Categories = require("../models/category");

/* GET categories. */
router.get("/", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);
    res.render("categories/categories", { title: "Categories", categories });
  });
});

/* POST new categories. */
router.post("/add", (req, res, next) => {
  let category = req.body;
  Categories.addCategories(category, (err, categories) => {
    if (err) res.send(err);
    res.redirect("/manage/categories");
  });
});

/* POST edit_category page. */
router.post("/edit/:id", (req, res, next) => {
  let category_id = { _id: req.params.id };
  let updateCategory = {
    title: req.body.title,
    description: req.body.description
  };

  Categories.editCategory(category_id, updateCategory, {}, (err, category) => {
    if (err) console.log(err);
    res.redirect("/manage/categories");
  });
});

module.exports = router;
