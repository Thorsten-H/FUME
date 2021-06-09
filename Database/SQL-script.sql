-- FOREIGN KEY (department_id) REFERENCES department (department_id)
CREATE TABLE IF NOT EXISTS Kunden (
  Kunden_ID INT NOT NULL PRIMARY KEY,
  Vorname VARCHAR(45) NOT NULL,
  Nachname VARCHAR(45) NOT NULL,
  Adresse VARCHAR(45) NOT NULL,
  Status VARCHAR(45) NOT NULL,
  Beginndatum DATE NOT NULL,
  Enddatum DATE NULL);

CREATE TABLE IF NOT EXISTS Bikes (
  Bike_ID INT NOT NULL PRIMARY KEY,
  Kunden_ID INT NOT NULL,
  Fahrradtyp VARCHAR(45) NOT NULL,
  Kaufdatum DATE NOT NULL,
  GPS VARCHAR(45) NOT NULL,
  Standort VARCHAR(45) NOT NULL,
  Status VARCHAR(45) NOT NULL,
  FOREIGN KEY (Kunden_ID) REFERENCES Kunden (Kunden_ID)
  );
 
CREATE TABLE IF NOT EXISTS Services (
  Service_ID INT NOT NULL PRIMARY KEY,
  Serviceart VARCHAR(45) NULL
  );
  
  
CREATE TABLE IF NOT EXISTS BikesService (
  BikesService_ID INT NOT NULL PRIMARY KEY,
  Bike_ID INT NOT NULL,
  Service_ID INT NOT NULL,
  Erstellungsdatum DATE NOT NULL,
  Bearbeitungsdatum DATE NOT NULL,
  Mitarbeiter VARCHAR(45) NOT NULL,
  FOREIGN KEY (Bike_ID) REFERENCES Bikes (Bike_ID),
  FOREIGN KEY (Service_ID) REFERENCES Services (Service_ID)
);