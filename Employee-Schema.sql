
DROP DATABASE IF EXISTS Employee_Tracker;

CREATE DATABASE Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE department(
    -- **id** - INT PRIMARY KEY
    id integer auto_increment not null,
    -- * **name** - VARCHAR(30) to hold department name
    name varchar (30) not null,

    primary key(id)
);

CREATE TABLE role(
    -- https://dev.mysql.com/doc/mysql-tutorial-excerpt/5.7/en/example-auto-increment.html
    id integer auto_increment not null,
    title VARCHAR (30) not null,
    salary DECIMAL not null,
    department_id INTEGER not null,
#     CONSTRAINT fk_department_id
#         foreign key (department_id)
#             references department(id),

    primary key(id)
);

CREATE TABLE employee(
    -- **id** - INT PRIMARY KEY
    id integer auto_increment not null,
    -- **first_name** - VARCHAR(30) to hold employee first name
    first_name varchar(30) not null,
    -- **last_name** - VARCHAR(30) to hold employee last name
    last_name varchar(30) not null,
    -- **role_id** - INT to hold reference to role employee has
    role_id integer not null,
#     constraint fk_role_id FOREIGN KEY (role_id) REFERENCES role(id),
    -- **manager_id** - INT to hold reference to another employee that manager of the current employee.
    -- This field may be null if the employee has no manager
    manager_id integer not null,
#     constraint fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id),
    
    primary key(id)
);

select * from employee;
select * from role;
select * from department;







INSERT into department
VALUES (14, "Defense");

INSERT into department
VALUES (24, "Music");

INSERT into department
VALUES (34, "Books");

INSERT into department
VALUES (44, "Propeganda");

INSERT into department
VALUES (54, "Intel");

INSERT into department
VALUES (34, "Bad Music");

select * from department;

INSERT into role
VALUES (5, "The Boss", 56000, 5);

INSERT into role
VALUES (10, "Salesperson", 35000, 1);

INSERT into role
VALUES (15, "Lead Engineer", 43000, 2);

INSERT into role
VALUES (25, "Legal", 50000, 4);


select * from role;

INSERT into employee
values (1, "Micky", "Mouse", 3, 8);

INSERT into employee
values (2, "Donald", "Duck", 2,20);

INSERT into employee
values (16, "Abe", "Lincoln", 5, 7);

INSERT into employee
values (1, "Donald", "Duck", 13, 45);

INSERT into employee
values (15, "Beckett", "Wickster", 5, 7);

INSERT into Employee_Tracker.employee
values (5, "Boocake", "Wickster", 5, 7);

INSERT into Employee_Tracker.employee
values (7, "Mozzie", "Meow", 3, 9);




