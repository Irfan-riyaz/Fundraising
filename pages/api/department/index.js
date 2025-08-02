// pages/api/department/index.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const departments = await db
      .collection('department')
      .find({})
      .limit(5)
      .toArray();
    res.status(200).json(departments);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

