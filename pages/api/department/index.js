// pages/api/department/index.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await connectToDatabase();
    const db = client.db();

    const departments = await db.collection('department').find({}).toArray();

    res.status(200).json(departments);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
