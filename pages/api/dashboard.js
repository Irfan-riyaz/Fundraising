// pages/api/department.js
import { connectToDatabase } from '../../lib/mongodb';
import mongoose from 'mongoose';

const DepartmentSchema = new mongoose.Schema({
  name: String,
  image: String,
});

useEffect(() => {
  fetch('/api/department')
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched departments:", data); // ← Add this
      setDepartments(data);
    })
    .catch((err) => console.error('Failed to fetch departments:', err));
}, []);


const Department =
  mongoose.models.Department || mongoose.model('Department', DepartmentSchema);

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ message: 'Failed to load departments' });
  }
}
