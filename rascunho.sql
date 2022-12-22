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
    "userId" INTEGER REFERENCES users(id)
    );

pgAdmin

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW())


SELECT * FROM users;

DROP TABLE users;

CREATE TABLE sessions(
    id SERIAL PRIMARY KEY,
    token TEXT,
    "userId" INTEGER REFERENCES users(id)
    );
	
SELECT * FROM sessions;

DROP TABLE sessions;

CREATE TABLE urls(
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  "shortUrl" TEXT NOT NULL UNIQUE,
  clicks INT DEFAULT 0,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "userId" INTEGER NOT NULL REFERENCES users(id)
)

SELECT * FROM urls;

