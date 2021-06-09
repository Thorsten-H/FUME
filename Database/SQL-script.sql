CREATE TABLE "Kunden" (
  "Kunden_ID" INT PRIMARY KEY,
  "Vorname" varchar,
  "Nachname" varchar,
  "Adresse" varchar,
  "Aktiv" boolean,
  "Beginndatum" DATE,
  "Enddatum" DATE
);

CREATE TABLE "Bikes" (
  "Bike_ID" INT PRIMARY KEY,
  "Kunden_ID" INT,
  "Fahrradtyp" varchar,
  "Kaufdatum" DATE,
  "GPS" varchar,
  "Standort" varchar,
  "Status" varchar
);

CREATE TABLE "BikesService" (
  "BikesService_ID" INT PRIMARY KEY,
  "Serviceart" varchar,
  "Bike_ID" INT,
  "Erstellungsdatum" DATE,
  "Bearbeitungsdatum" DATE
);

ALTER TABLE "Bikes" ADD FOREIGN KEY ("Kunden_ID") REFERENCES "Kunden" ("Kunden_ID");

ALTER TABLE "BikesService" ADD FOREIGN KEY ("Bike_ID") REFERENCES "Bikes" ("Bike_ID");

-- Input dummydata
INSERT INTO "Kunden"
VALUES (01, 'Jan', 'Brebeck','S 6 15', TRUE,TO_DATE('17/12/2015', 'DD/MM/YYYY'),TO_DATE('17/12/2015', 'DD/MM/YYYY'));

INSERT INTO "Bikes"
VALUES (1, 01, 'MTB',TO_DATE('17/12/2015', 'DD/MM/YYYY'),'14.222;21.123','Kunde',TRUE);

INSERT INTO "BikesService"
VALUES (001, 'Reifenwechsel', 1,TO_DATE('17/12/2015', 'DD/MM/YYYY'),TO_DATE('17/12/2015', 'DD/MM/YYYY'));