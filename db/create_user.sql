INSERT INTO users (username, password_digest, email )
VALUES($1, $2, $3, $4)
RETURNING id
