const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecom");

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String
});

const Product = mongoose.model("products", productSchema);

app.get("/list", async (req, resp) => {
  try {
    const data = await Product.find();
    resp.send(data);
  } catch (error) {
    console.error(error);
    resp.status(500).send('Error occurred');
  }
});

app.delete("/delete/:id", async (req, resp) => {
  try {
    console.log(req.params);
    const data = await Product.deleteOne({ _id: req.params.id });
    resp.send("Deleted");
  } catch (error) {
    console.error(error);
    resp.status(500).send('Error occurred');
  }
});

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
