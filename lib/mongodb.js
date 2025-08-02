// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error('mongodb+srv://Irfan:Irfan%40123@ecommerce-db.pvlqlso.mongodb.net/store?retryWrites=true&w=majority&appName=Ecommerce-DB');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// ✅ Correct named export
export const connectToDatabase = () => clientPromise;
