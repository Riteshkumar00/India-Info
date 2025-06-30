const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',               // Change if your MySQL user is different
  password: 'golu@222122',               // Set your MySQL password
  database: 'india_info'   // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err.message);
  } else {
    console.log('✅ MySQL connected');
  }
});

module.exports = connection;
