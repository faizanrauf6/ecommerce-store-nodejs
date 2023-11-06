const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../config/multer");

const {
  newProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const { authenticated, requiredRole } = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const productValidation = require("../validations/productValidation");

router.post(
  "/create",
  validate(productValidation.newProduct),
  authenticated,
  requiredRole("admin"),
  uploadMiddleware("product").array("file"),
  newProduct
);

router.get(
  "/get-all-products",
  validate(productValidation.getAllProducts),
  getAllProducts
);
router.get(
  "/get-product/:slug",
  validate(productValidation.getProduct),
  getProduct
);

router.delete(
  "/delete-product/:slug",
  validate(productValidation.deleteProduct),
  authenticated,
  requiredRole("admin"),
  deleteProduct
);

router.patch(
  "/update-product/:slug",
  validate(productValidation.updateProduct),
  authenticated,
  requiredRole("admin"),
  uploadMiddleware("product").array("file"),
  updateProduct
);

module.exports = router;
