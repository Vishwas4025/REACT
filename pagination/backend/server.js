const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongoose Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

// GET Route (returns all 100 products)
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Search products by name (case-insensitive, partial match)
app.get('/api/products/search', async (req, res) => {
  const nameQuery = req.query.name || '';

  // try {
  //   const products = await Product.find({
  //     name: { $regex: nameQuery, $options: 'i' },
  //   });

  //   res.json(products);
  // } catch (err) {
  //   res.status(500).json({ error: 'Search failed' });
  // }

  try {
    const regex = new RegExp(nameQuery, 'i'); // case-insensitive match
    const products = await Product.find({ name: { $regex: regex } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }

});

// Update a product
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});



// Connect to MongoDB and start server
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
