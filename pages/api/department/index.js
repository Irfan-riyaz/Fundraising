// pages/api/department/index.js
import { connectToDatabase } from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const departments = await db.collection('departments').find({}).toArray();
    res.status(200).json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ error: 'Failed to load departments' });
  }
}
