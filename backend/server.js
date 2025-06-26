const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'hunterxhunter'
});

app.get('/personajes', (req, res) => {
  const { nombre, nen } = req.query;

  let sqlQuery = 'SELECT * FROM personajes WHERE 1=1';
  const params = [];


  if (nombre) {
    sqlQuery += ' AND nombre LIKE ?';
    params.push(`%${nombre}%`); 
  }
  if (nen && nen !== 'all') {
    sqlQuery += ' AND tipo_nen = ?';
    params.push(nen);
  }
  db.query(sqlQuery, params, (err, results) => {
    if (err) {
      console.error('Error en la consulta SQL:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
    res.json(results);
  });
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));