const express = require("express");
const router = express.Router();
const {
  createOrder,
  stripeWebhook,
  getAllOrders,
  getSingleOrder,
  updateOrder,
} = require("../controllers/orderController");
const { authenticated, requiredRole } = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const orderValidation = require("../validations/orderValidation");

router.post(
  "/create",
  validate(orderValidation.createOrder),
  authenticated,
  createOrder
);
router.get(
  "/get-all",
  validate(orderValidation.getAllOrders),
  authenticated,
  requiredRole("admin"),
  getAllOrders
);
router.get(
  "/:id",
  validate(orderValidation.getSingleOrder),
  authenticated,
  requiredRole("admin"),
  getSingleOrder
);
router.patch(
  "/:id",
  validate(orderValidation.updateOrder),
  authenticated,
  requiredRole("admin"),
  updateOrder
);
router.post("/stripe/webhook", stripeWebhook);
module.exports = router;
