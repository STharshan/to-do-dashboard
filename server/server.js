const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root',      // Your MySQL username
  password: 'Tharsan@6',  // Your MySQL password
  database: 'todo_db'    // Your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(express.json());

app.get('/api/to-do', (req, res) => {
  try {
    // Fetch tasks from the API or from your MySQL database
    const sqlGet = "select * from todo_list";
    db.query(sqlGet, (error, result) => {
    res.send(result);
  })
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

