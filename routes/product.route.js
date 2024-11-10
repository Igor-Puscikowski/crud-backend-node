const express = require("express");

const router = express.Router();

const {
  getProduct,
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

//end point that is getting all products
router.get("/", getAllProducts);

//end point that is getting single product by id
router.get("/:id", getProduct);

//creating product
router.post("/", createProduct);

//edit product by id
router.put("/:id", editProduct);

//delete product by id
router.delete("/:id", deleteProduct);
module.exports = router;
