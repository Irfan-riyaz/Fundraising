// /pages/api/products.js
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase(); // Connects to `donation` DB via .env
    const collection = db.collection('department'); // 👈 Your collection name
    const products = await collection.find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error('Failed to fetch donation departments:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
