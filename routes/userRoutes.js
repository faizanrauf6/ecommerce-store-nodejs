const express = require("express");
const router = express.Router();
const { authenticated, requiredRole } = require("../middlewares/auth");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/userValidation");
const {
  updateProfile,
  updateRole,
  getAllUsers,
  getUserProfile,
  getUserOrders,
} = require("../controllers/userController");

router.get("/me", authenticated, getUserProfile);
router.post(
  "/update-profile",
  validate(userValidation.updateProfile),
  authenticated,
  updateProfile
);
router.post(
  "/update-role",
  validate(userValidation.updateRole),
  authenticated,
  requiredRole("admin"),
  updateRole
);

router.get(
  "/get-all-users",
  validate(userValidation.getAllUsers),
  authenticated,
  requiredRole("admin"),
  getAllUsers
);
router.get("/get-user-orders", authenticated, getUserOrders);

module.exports = router;
