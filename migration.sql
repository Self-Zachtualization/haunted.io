DROP TABLE IF EXISTS users, tools, ghosts, users_tools, users_ghosts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE
);

CREATE TABLE tools (
  id SERIAL PRIMARY KEY,
  name TEXT,
  price MONEY
);

CREATE TABLE ghosts (
  id SERIAL PRIMARY KEY,
  name TEXT,
  ghost_type TEXT,
  is_violent BOOLEAN NOT NULL,
  address TEXT
);

CREATE TABLE users_tools (
  user_id INTEGER NOT NULL,
  tool_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(tool_id) REFERENCES tools(id) ON DELETE CASCADE
);

CREATE TABLE users_ghosts (
  user_id INTEGER NOT NULL,
  ghost_id INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(ghost_id) REFERENCES ghosts(id) ON DELETE CASCADE
);