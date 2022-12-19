urls
CREATE TABLE urls(
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  shortUrl TEXT NOT NULL UNIQUE,
  clicks INT DEFAULT 0,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  userId INTEGER NOT NULL REFERENCES users(id)
)

users
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW())

token
CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    token TEXT,
    userEmail TEXT REFERENCES users(email)
    )