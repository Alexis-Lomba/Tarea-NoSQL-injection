require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

client.connect()
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

  app.post('/login', async (req, res) => {
    try {
      const db = client.db(dbName);
      const users = db.collection('Users');
  
      const user = await users.findOne(req.body);
  
      if (user) {
        res.json({ message: '✅ Login exitoso' });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error del servidor' });
    }
  });
  

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
