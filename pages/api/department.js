import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('donation'); // database name
    const data = await db.collection('department').find({}).toArray();

    res.status(200).json(data.map((doc) => ({
      ...doc,
      _id: doc._id.toString()
    })));
  } catch (error) {
    console.error('Error fetching departments:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
