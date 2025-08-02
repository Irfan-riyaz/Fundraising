import { connectToDatabase } from '../../../lib/mongodb';
import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  longDescription: String,
  image: String,
});

// Force it to map to 'department' collection (lowercase)
const Department =
  mongoose.models.Department || mongoose.model('Department', DepartmentSchema, 'department');

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    await connectToDatabase();
    const department = await Department.findById(id);

    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json(department);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ message: 'Error fetching department', error });
  }
}
