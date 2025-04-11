require('dotenv').config();
const { MongoClient } = require('mongodb');

async function crearUsuario() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const db = client.db(process.env.DB_NAME);
  const users = db.collection('Users');

  await users.insertOne({ username: 'admin', password: '1234' });
  console.log('Usuario creado');
  await client.close();
}

crearUsuario();
