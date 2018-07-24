const express = require("express");
const router = express.Router();
const Categories = require("../models/category");

/* GET manage articles page. */
router.get("/articles", (req, res, next) => {
  res.render("manage/manage_articles", { title: "Manage articles" });
});

/* GET manage categories page. */
router.get("/categories", (req, res, next) => {
  Categories.getCategories((err, categories) => {
    if (err) console.log(err);
    res.render("manage/manage_categories", {
      title: "Manage categories",
      categories
    });
  });
});

/* GET add_articles page. */
router.get("/articles/add", (req, res, next) => {
  res.render("manage/add_articles", { title: "Create articles" });
});

/* GET edit_article page. */
router.get("/articles/edit/:id", (req, res, next) => {
  res.render("manage/edit_article", { title: "Edit articles" });
});

/* GET add_category page. */
router.get("/categories/add", (req, res, next) => {
  res.render("manage/add_category", { title: "Create categories" });
});

/* GET edit_category page. */
router.get("/categories/edit/:id", (req, res, next) => {
  let category_id = req.params.id;

  Categories.findCategoryById(category_id, (err, category) => {
    if (err) console.log(err);
    res.render("manage/edit_category", {
      title: "Edit category",
      category
    });
  });
});

module.exports = router;
