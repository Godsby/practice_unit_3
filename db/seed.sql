DROP DATABASE IF EXISTS practice_unit_3;
CREATE DATABASE practice_unit_3;

\c practice_unit_3;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  body TEXT NOT NULL 
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  post_id INT REFERENCES posts(id),
  body TEXT NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  album_id INT REFERENCES albums(id),
  image_name VARCHAR NOT NULL,
  image_link VARCHAR NOT NULL
);

INSERT INTO users(username, email) VALUES ('corey', 'corey@corey.com'), ('Reed','reed@reed.com');

INSERT INTO posts(user_id, body) VALUES (1, 'This is a great post'), (1, 'Another great post'), (2, 'Coolest post');

INSERT INTO likes(user_id, post_id) VALUES (1, 1), (1, 2), (2, 1), (2, 2);

INSERT INTO comments(user_id, post_id, body) VALUES (1, 1, 'Ditto'), (1, 2, 'Agree'), (2, 3, 'Fully agree');

INSERT INTO albums(title) VALUES ('cat'), ('dog');

INSERT INTO pictures(album_id, image_name, image_link) VALUES(1, 'corduroy','./corduroy.jpg'), (2, 'boo', './boo.jpg');
