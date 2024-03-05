// lib/db.js
import mysql from 'mysql';
 

const dbConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

let connection = null;

export async function connectToDatabase() {
  if (connection) {
    // If a connection is already established, return it
    return connection;
  }

  // If no connection is established, create a new one
  connection = mysql.createConnection(dbConfig);

  // Connect to the database
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
  });

  return connection;
}
