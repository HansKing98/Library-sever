CREATE TABLE books(
    id INT NOT NULL auto_increment  PRIMARY KEY,
    isbn VARCHAR(20) NOT NULL,
    openid VARCHAR(50) NOT NULL,
    title VARCHAR(100) NOT NULL,
    image VARCHAR(100),
    alt VARCHAR(100) NOT NULL,
    publisher VARCHAR(100) NOT NULL,
    summary VARCHAR(1000) NOT NULL COMMENT '简介',
    price VARCHAR(100) NOT NULL,
    rate float COMMENT '评分',
    tags VARCHAR(100),
    author VARCHAR(100)
)
