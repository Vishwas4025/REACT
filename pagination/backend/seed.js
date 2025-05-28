const mongoose = require('mongoose');
require('dotenv').config();

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean,
});

const Product = mongoose.model('Product', productSchema);

const categories = ['Category 0', 'Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6', 'Category 7', 'Category 8', 'Category 9'];

const seedProducts = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Product.deleteMany();

  const products = [];

  for (let i = 1; i <= 100; i++) {
    products.push({
      name: `Product ${i}`,
      price: (Math.random() * 100).toFixed(2),
      category: categories[i % 10],
      inStock: Math.random() < 0.5,
    });
  }

  await Product.insertMany(products);
  console.log('Seeded 100 products!');
  mongoose.disconnect();
};

seedProducts();
