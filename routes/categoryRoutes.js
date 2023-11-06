const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../config/multer");

const {
  newCategory,
  getAllCategories,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const { authenticated, requiredRole } = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const categoryValidation = require("../validations/categoryValidation");

router.post(
  "/create",
  validate(categoryValidation.newCategory),
  authenticated,
  requiredRole("admin"),
  uploadMiddleware("category").single("file"),
  newCategory
);

router.get("/get-all-categories", getAllCategories);
router.get(
  "/get-category/:slug",
  validate(categoryValidation.getCategory),
  getCategory
);

router.delete(
  "/delete-category/:slug",
  validate(categoryValidation.deleteCategory),
  authenticated,
  requiredRole("admin"),
  deleteCategory
);

router.patch(
  "/update-category/:slug",
  validate(categoryValidation.updateCategory),
  authenticated,
  requiredRole("admin"),
  uploadMiddleware("category").single("file"),
  updateCategory
);

module.exports = router;
