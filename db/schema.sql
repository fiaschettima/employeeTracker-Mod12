DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  dep_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS department_role;
CREATE TABLE department_role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary INT,
  department_id TEXT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT
    FOREIGN KEY (role_id) REFERENCES department_role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
)