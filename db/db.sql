USE chuko_schema
CREATE TABLE users(
	id BIGINT KEY AUTO_INCREMENT,
    email VARCHAR(180) NOT NULL UNIQUE,
    name VARCHAR(90) NOT NULL,
    lastname VARCHAR(90) NOT NULL, 
    phone VARCHAR(90) not null unique,
    image VARCHAR(255) NULL, 
    password VARCHAR(90) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
)
