const express = require("express");
const mysql = require("mysql2");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "d7fe5afa",
    database: "USERS",
  });
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      return;
    }
    console.log("Connected to MySQL database");
  });

  app.get('/',(req,res)=>{
    res.send("working fine!");
  });

app.post('/signup', (req, res) => {
    const { username, email, password, full_name, phone_number } = req.body;
  
    // Simple server-side validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password.' });
    }
  
    const query = 'INSERT INTO users (username, email, password, full_name, phone_number) VALUES (?, ?, ?, ?, ?)';
    const values = [username, email, password, full_name, phone_number];
  
    connection.query(query, values, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      console.log('Data inserted:', results);
      return res.status(201).json({ message: 'User registered successfully' });
    });
  });

  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password.' });
    }
  
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const values = [email, password];
    console.log('Login request received:', { email, password });

  
    connection.query(query, values, (err, results) => {
      console.log('Results from the database:', results);
      if (err) {
        console.error('Error querying data:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid email or password.' });
      }
  
      console.log('User authenticated:', results[0]);
      return res.status(200).json({ message: 'Login successful' });
    });
  });

  app.post('/submit-booking', (req, res) => {
    const formData = req.body;
  
    const sql = 'INSERT INTO booking SET ?';
  
    connection.query(sql, formData, (error, results) => {
      if (error) {
        console.error('Error inserting data into MySQL:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data inserted successfully:', results);
        res.json({ message: 'Form data inserted successfully!' });
      }
    });
  });

app.get('/get-bookings', (req, res) => {
  const sql = 'SELECT * FROM booking';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error fetching data from MySQL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data fetched successfully:', results);
      res.json(results);
    }
  });
});

app.put('/update-booking/:id', (req, res) => {
  const bookingId = req.params.id;
  const updatedData = req.body;

  const sql = 'UPDATE booking SET ? WHERE reservation_id = ?';

  connection.query(sql, [updatedData, bookingId], (error, results) => {
    if (error) {
      console.error('Error updating data in MySQL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data updated successfully:', results);
      res.json({ message: 'Booking record updated successfully!' });
    }
  });
});
app.delete('/delete-booking/:id', (req, res) => {
  const bookingId = req.params.id;

  const sql = 'DELETE FROM booking WHERE reservation_id = ?';

  connection.query(sql, [bookingId], (error, results) => {
    if (error) {
      console.error('Error deleting data from MySQL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data deleted successfully:', results);
      res.json({ message: 'Booking record deleted successfully!' });
    }
  });
});


const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});