import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new pg.Pool({
  // database: "haunted",
});

app.use(express.static("static"));
app.use(express.json());

app.post("/api/ghosts", (req, res, next) => {
  console.log(req.body);
  const { name, ghost_type, is_violent, address, username } = req.body;
  pool
    .query(
      `INSERT INTO ghosts 
              (name, ghost_type, is_violent, address) 
            VALUES ($1, $2, $3, $4);`,
      [name, ghost_type, is_violent, address, username]
    )
    .then((info) => {
      res.send(info.rows);
    })
    .catch(next);

  // `INSERT INTO ghosts (name, ghost_type, is_violent, address) VALUES ($1, $2, $3, $4);`,
  // [name, ghost_type, is_violent, address]
});

app.get("/api/users/active", (req, res, next) => {
  pool
    .query("SELECT * FROM users")
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
