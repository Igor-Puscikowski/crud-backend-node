const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("dzieje sieeee");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.6wafv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.error("Connection Failed", error);
  });
