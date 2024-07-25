import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const port = 4010;

app.use(cors());
app.use(express.json());

async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Contacts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToMongoDB();

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model('details', productSchema);

app.post('/Contacts', async (req, res) => {
  console.log('Received data:', req.body);
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({ message: 'Product added successfully', product });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(error.name === 'ValidationError' ? 400 : 500).send({ error: 'Failed', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
