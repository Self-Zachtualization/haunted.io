import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production" ? { ssl: { rejectUnauthorized: false } } : {}),
});

app.use(express.static("static"));
app.use(express.json());

app.post("/api/ghosts", async (req, res, next) => {
  console.log(req.body);
  const { name, ghost_type, is_violent, address, username } = req.body;
  let uid = await pool.query(`INSERT INTO users (username) VALUES ($1) RETURNING id;`, [username]);
  uid = JSON.stringify(uid.rows[0].id);
  console.log(uid ? `await success: ${uid}` : `you can't do async await idiot`);
  await pool
    .query(
      `INSERT INTO ghosts 
      (name, ghost_type, is_violent, address, user_id) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
      [name, ghost_type, is_violent, address, uid]
    )
    .then((info) => {
      res.send(info.rows[0]);
    })
    .catch(next);
});

app.get("/api/users/active", (req, res, next) => {
  pool
    .query(
      `SELECT username, name, ghost_type, is_violent, address FROM users 
        INNER JOIN ghosts g ON g.user_id = users.id;`
    )
    .then((info) => {
      res.send(info.rows);
    })
    .catch(next);
});

app.get("/api/ghosts/active", (req, res, next) => {
  pool
    .query("SELECT * FROM ghosts")
    .then((info) => {
      res.send(info.rows);
    })
    .catch(next);
});

// Bad URL
app.use((req, res, next) => {
  res.sendStatus(404);
});

// Server error
app.use((err, req, res, next) => {
  if (err) {
    pool.end();
    console.error(`Internal Server Error`, err);
    res.sendStatus(500);
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} activated`);
});
