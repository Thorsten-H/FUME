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

CREATE TABLE "Services" (
  "Service_ID" INT PRIMARY KEY,
  "Serviceart" varchar
);

CREATE TABLE "BikesService" (
  "BikesService_ID" INT PRIMARY KEY,
  "Service_ID" INT,
  "Bike_ID" INT,
  "Erstellungsdatum" DATE,
  "Bearbeitungsdatum" DATE
);

ALTER TABLE "Bikes" ADD FOREIGN KEY ("Kunden_ID") REFERENCES "Kunden" ("Kunden_ID");

ALTER TABLE "BikesService" ADD FOREIGN KEY ("Service_ID") REFERENCES "Services" ("Service_ID");

ALTER TABLE "BikesService" ADD FOREIGN KEY ("Bike_ID") REFERENCES "Bikes" ("Bike_ID");

-- TABLE Kunden {
--   Kunden_ID INT NOT NULL PRIMARY KEY
--   Vorname VARCHAR{45} NOT NULL
--   Nachname VARCHAR{45} NOT NULL
--   Adresse VARCHAR{45} NOT NULL
--   Aktive BOOLEAN NOT NULL
--   Beginndatum DATE NOT NULL
--   Enddatum DATE NULL};

-- TABLE Bikes {
--   Bike_ID INT NOT NULL PRIMARY KEY
--   Kunden_ID INT NOT NULL
--   Fahrradtyp VARCHAR{45} NOT NULL
--   Kaufdatum DATE NOT NULL
--   GPS VARCHAR{45} NOT NULL
--   Standort VARCHAR{45} NOT NULL
--   Status VARCHAR{45} NOT NULL
--   FOREIGN KEY {Kunden_ID} REFERENCES Kunden {Kunden_ID}
--   };
 
-- TABLE Services {
--   Service_ID INT NOT NULL PRIMARY KEY
--   Serviceart VARCHAR{45} NULL
--   };
  
  
-- TABLE BikesService {
--   BikesService_ID INT NOT NULL PRIMARY KEY
--   Bike_ID INT NOT NULL
--   Service_ID INT NOT NULL
--   Erstellungsdatum DATE NOT NULL
--   Bearbeitungsdatum DATE NOT NULL
--   FOREIGN KEY {Bike_ID} REFERENCES Bikes {Bike_ID}
--   FOREIGN KEY {Service_ID} REFERENCES Services {Service_ID}
-- };

-- -- For visualisation

-- -- TABLE Kunden {
-- --   Kunden_ID INT [pk]
-- --   Vorname varchar
-- --   Nachname varchar
-- --   Adresse varchar
-- --   Aktive boolean
-- --   Beginndatum DATE
-- --   Enddatum DATE
-- -- }

-- -- TABLE Bikes {
-- --   Bike_ID INT [pk]
-- --   Kunden_ID INT  [ref: > Kunden.Kunden_ID]
-- --   Fahrradtyp varchar
-- --   Kaufdatum DATE 
-- --   GPS varchar
-- --   Standort varchar
-- --   Status varchar
-- --   }
 
 
-- -- TABLE Services {
-- --   Service_ID INT [pk]
-- --   Serviceart varchar
-- --   }
  
  
-- -- TABLE BikesService {
-- --   BikesService_ID INT [pk]
-- --   Service_ID INT [ref: > Services.Service_ID]
-- --   Bike_ID INT [ref: > Bikes.Bike_ID]
-- --   Erstellungsdatum DATE 
-- --   Bearbeitungsdatum DATE
-- -- }