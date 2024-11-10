const Product = require("../models/product.model");

//end point that is getting all products
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({}); //Product.find({}): Metoda Mongoose do pobierania wszystkich dokumentów z kolekcji products.
    res.status(200).json(product);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

//end point responsible for getting single product by id
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id); // Metoda Mongoose do pobierania dokumentu na podstawie jego ID.
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//creating product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProduct,
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
};
