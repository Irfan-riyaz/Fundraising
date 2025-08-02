// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client = new MongoClient(uri);
let clientPromise = client.connect();

// ✅ Named export required for importing as `connectToDatabase`
export const connectToDatabase = async () => {
  const connectedClient = await clientPromise;
  const db = connectedClient.db(); // defaults to DB from URI
  return { client: connectedClient, db };
};
