#!/bin/bash
docker pull mysql/mysql-server:latest
docker run --name fume -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server:latest

docker cp FUME-DB-Create.sql fume:/FUME-DB-Create.sql

docker exec -it fume bin/bash
mysql -uroot -ppassword
create database fume_database;
use fume_database;
source /FUME-DB-Create.sql