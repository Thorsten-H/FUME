docker pull postgres
docker run --rm --name postgresDB -p 5432:5432 -e POSTGRES_PASSWORD=admin -d postgres:latest

docker exec -it postgresDB psql -U postgres --command "CREATE USER admin WITH SUPERUSER PASSWORD 'admin';"
docker exec -it postgresDB psql -U postgres --command "CREATE DATABASE fume;"
docker cp "./SQL-script.sql" postgresDB:SQL-script.sql
docker exec -it postgresDB psql -U postgres -d fume -f ./SQL-script.sql

# docker exec -it postgresDB psql -d fume  -c "\COPY car FROM 'car.csv' delimiter ',' CSV HEADER;"
# docker exec -it postgresDB psql -d fume  -c "\COPY car FROM 'car.csv' delimiter ',' CSV HEADER;"
# docker exec -it postgresDB psql -d fume  -c "\COPY car FROM 'car.csv' delimiter ',' CSV HEADER;"
# docker exec -it postgresDB psql -d fume  -c "\COPY car FROM 'car.csv' delimiter ',' CSV HEADER;"





docker pull dpage/pgadmin4
docker run --rm --name pg-admin -e PGADMIN_DEFAULT_EMAIL=admin@admin.de -e PGADMIN_DEFAULT_PASSWORD=admin -d -p 2020:80 dpage/pgadmin4