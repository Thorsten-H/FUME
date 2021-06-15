import React, { Component }  from 'react';

function order_planing() {
  const customerData = [
    { 'Kunden_ID': '14', 'Vorname': 'Jan', 'Nachname': 'Bern', 'Adresse': 'Q 7 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum','Bike_ID': 1248},
    { 'Kunden_ID': '45564351', 'Vorname': 'Niklas', 'Nachname': 'Müller', 'Adresse': 'Müllerstraße 555 64521 Groß Gerau', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum','Bike_ID': 0, },
    { 'Kunden_ID': '12345', 'Vorname': 'Simon', 'Nachname': 'Stein', 'Adresse': 'Q 8 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum', 'Bike_ID': 9756},
    { 'Kunden_ID': '55', 'Vorname': 'Andres', 'Nachname': 'Gärtner', 'Adresse': 'Zeil 155 64135 Frankfurt', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' ,'Bike_ID': 9762},
    { 'Kunden_ID': '2345310', 'Vorname': 'Thorsten', 'Nachname': 'Becker', 'Adresse': 'Bäckerstraße 3 63215 Darmstadt', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum', 'Bike_ID': 1255 }
  ]

  const reparatur_daten = [
    {
      'BikeService_ID': 1,
      'Serviceart': "Felgen wechseln",
      'Bike_ID': 1248,
      'Erstellungsdatum': "12.6.2021",
      'Bearbeitungsdatum': "14.6.2021"
    },
    {
      'BikeService_ID': 2,
      'Serviceart': "Reifen aufpumpen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "14.6.2021"
    },
    {
      'BikeService_ID': 3,
      'Serviceart': "Sessel austauschen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 4,
      'Serviceart': "Sessel einstellen",
      'Bike_ID': 9756,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 5,
      'Serviceart': "Sessel austauschen",
      'Bike_ID': 9762,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "17.6.2021"
    }
  ]

const mergedList = reparatur_daten.map(t1 => ({...t1, ...customerData.find(t2 => t2.Bike_ID === t1.Bike_ID)}))


  let table_content = []

  mergedList.forEach(e => {
    table_content.push(
      <tr>
        <td className="Cell">
          {e.Kunden_ID}
        </td >
        <td className="Cell"> 
          {e.Nachname}
        </td>
        <td className="Cell">
          {e.Bike_ID}
        </td>
        <td className="Cell">
          {e.BikeService_ID}
        </td>
        <td className="Cell">
          {e.Serviceart}
        </td>
        <td className="Cell">
          {e.Erstellungsdatum}
        </td>
        <td className="Cell">
          {e.Bearbeitungsdatum}
        </td>
      </tr>
    )
  });

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
      <br></br>
      <table style={{
        borderCollapse: "separate",
        backgroundColor: "white",
        border: "solid black 1px",
        borderRadius: "6px"
  }}
    
    className="kudentable">
      <tr>
        <th className="Cell">Kunden_ID</th>
        <th className="Cell">Nachname</th>
        <th className="Cell">Bike_ID</th>
        <th className="Cell">BikeService_ID</th>
        <th className="Cell">Serviceart</th>
        <th className="Cell">Erstellungsdatum</th>
        <th className="Cell">Bearbeitungsdatum</th>
      </tr>
      {table_content}
    </table>
    </div>
  );
}

export default order_planing;
