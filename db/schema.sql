###Schema

CREATE DATABASE burgers_db;
USE burgers_db;
USE so8fjvu52nq3qxti;
CREATE TABLE burgers 
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	date TIMESTAMP NULL DEFAULT NULL,
	PRIMARY KEY(id)
);
-- date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- * Create the `burgers_db`
--         * Use the `burgers_db`
--         * Create a burgers table like the below instructions
--             * `id` as primary key auto incrementing
--             * `burger_name` as a string
--             * `devoured` as a boolean
--             * `date` as TIMESTAMP


