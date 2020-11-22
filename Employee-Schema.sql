# Assistance with from https://www.npmjs.com/package/mysql#install


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

    id integer auto_increment not null,
    title VARCHAR (30) not null,
    salary DECIMAL not null,
    department_id INTEGER not null,
    constraint fk_department_id foreign key (department_id) references department(id),
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
    constraint fk_role_id FOREIGN KEY (role_id) REFERENCES role(id),
    -- **manager_id** - INT to hold reference to another employee that manager of the current employee.
    -- This field may be null if the employee has no manager
    manager_id integer,
    constraint fk_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id),
    primary key(id)
);

select * from employee;
select * from role;
select * from department;

INSERT into department (name)
VALUES ("Sales");
INSERT into department (name)
VALUES ("Engineering");
INSERT into department (name)
VALUES ("Finance");
INSERT into department (name)
VALUES ("Legal");
INSERT into department (name)
VALUES ("Manager");

select * from department;

INSERT into role (title, salary, department_id)
VALUES ("Sales Lead", 45000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Salesperson", 35000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Lead Engineer", 43000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 50000, 3);
INSERT into role (title, salary, department_id)
VALUES ("Legal", 50000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Manager", 65000, 5);

select * from role;

INSERT into employee (first_name, last_name, role_id)
values ("Micky", "Mouse", 3);
INSERT into employee (first_name, last_name, role_id)
values ("Tonya", "Harding", 4);
INSERT into employee (first_name, last_name, role_id)
values ("Abe", "Lincoln", 5);
INSERT into employee (first_name, last_name, role_id)
values ("Beckett", "Wickster", 6);
INSERT into employee (first_name, last_name, role_id)
values ("Susan", "Anderson", 7);
INSERT into employee (first_name, last_name, role_id)
values ("Linda", "Staley", 8);

select * from employee;





