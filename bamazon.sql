
create database bamazon_DB;
use bamazon_DB;
create table products(
id integer(100) AUTO_INCREMENT NOT NULL,
product_name varchar(100) not null,
department_name varchar(100) not null,
price decimal(10, 2) not null,
stock_quantity integer(10) not null,
Primary Key (id)
);

INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (1, 'Sound Bar', 'Electronics', 199, 10);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (2, '4K TV', 'Electronics', 1499, 17);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (3, 'Instant Pot', 'Housewares', 79, 31);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (4, 'Star Wars BluRay', 'Movies', 15, 24);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (5, 'Earrings', 'Jewelry', 725, 6);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (6, 'The Shining', 'Books', 11, 14);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (7, 'Espresso Machine', 'Housewares', 85, 19);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (8, 'Laptop', 'Electronics', 649, 7);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (9, 'Necklace', 'Jewelry', 379, 15);
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values (10, 'Air Fryer', 'Housewares', 149, 4);