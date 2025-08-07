const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

const db = new sqlite3.Database(path.join(__dirname, 'db', 'ecommerce.db'));

// Signup route
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], function (err) {
    if (err) {
      console.error("❌ Signup error:", err.message);
      return res.status(400).json({ error: "Email already exists." });
    }
    res.json({ message: "✅ Signup successful!", userId: this.lastID });
  });
});

// Login route
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, row) => {
    if (err) {
      console.error("❌ Login error:", err.message);
      return res.status(500).json({ error: "Internal error" });
    }
    if (!row) return res.status(401).json({ error: "Invalid email or password" });

    res.json({ message: "✅ Login successful", user: row });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
