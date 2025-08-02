// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('mongodb+srv://Irfan:Irfan%40123@ecommerce-db.pvlqlso.mongodb.net/store?retryWrites=true&w=majority&appName=Ecommerce-DB');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// ✅ Named export
export const connectToDatabase = async () => {
  const client = await clientPromise;
  const db = client.db(); // You can optionally pass your DB name: client.db("your-db-name")
  return { client, db };
};
