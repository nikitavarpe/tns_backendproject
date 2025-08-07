const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db');
if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath);
}

const db = new sqlite3.Database(path.join(dbPath, 'ecommerce.db'), (err) => {
  if (err) return console.error("❌ DB Connection Failed:", err.message);
  console.log("✅ Connected to SQLite DB.");
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`, (err) => {
    if (err) console.error("❌ Table creation failed:", err.message);
    else console.log("✅ 'users' table created or already exists.");
  });

  db.close((err) => {
    if (err) console.error("❌ DB close failed:", err.message);
    else console.log("✅ Database connection closed.");
  });
});
