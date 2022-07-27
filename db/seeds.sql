INSERT INTO department (dep_name)
VALUES ('Managment'),
       ('Sales'),
       ('IT'),
       ('Marketing'),
       ('Finance'),
       ('HR'),
       ('Developtment');

INSERT INTO department_role (title, salary, department_id)
VALUES ('Software Engineer', 120000, 7),  
       ('Intern', 30000, 7),
       ('Project Manager', 130000, 1),
       ('Tech Sales', 110000, 2),
       ('office IT', 70000, 3),
       ('Marketing Specialist', 100000, 4),
       ('Account specialist', 90000, 5),
       ('HR team' 85000, 6);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Sam', 'Riddles', 1, 1);