DROP DATABASE IF EXISTS news_dev;
CREATE DATABASE news_dev;

\c news_dev;

CREATE TABLE countries (
    id SERIAL PRIMARY KEY,
    country TEXT NOT NULL,
    time TIMESTAMP WITH TIME ZONE NOT NULL,
    landmarks TEXT,
    cities TEXT
);