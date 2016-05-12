###Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (id AUTO_INCREMENT, burger_name varchar(255) NOT NULL, devoured boolean, date TIMESTAMP, PRIMARY KEY(id)); 


-- * Create the `burgers_db`
--         * Use the `burgers_db`
--         * Create a burgers table like the below instructions
--             * `id` as primary key auto incrementing
--             * `burger_name` as a string
--             * `devoured` as a boolean
--             * `date` as TIMESTAMP