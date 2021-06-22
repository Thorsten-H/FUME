import React, { component } from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function order_planing() {
  const customerData = [
    { 'Kunden_ID': '99523', 'Vorname': 'Sigfried', 'Nachname': 'Abram', 'Adresse': 'Viehhofstraße 26 68165 Mannheim', 'Aktiv': true, 'Beginndatum': '01.01.2020', 'Enddatum': '-', 'Bike_ID': 782 },
    { 'Kunden_ID': '11972', 'Vorname': 'Sophia', 'Nachname': 'Klatten', 'Adresse': 'Mercedes-Benz-Straße 12 15672 Ingolstadt', 'Aktiv': true, 'Beginndatum': '01.01.2020', 'Enddatum': '-', 'Bike_ID': 1248 },
    { 'Kunden_ID': '1342', 'Vorname': 'Judith', 'Nachname': 'Wangkirchen', 'Adresse': 'Q8 15 68168 Mannheim', 'Aktiv': false, 'Beginndatum': '01.01.2020', 'Enddatum': '01.04.2021', 'Bike_ID': 1255 },
    { 'Kunden_ID': '67', 'Vorname': 'Aaron', 'Nachname': 'Abelsberg', 'Adresse': 'Mannheimerweg 12 65142 Ludwigshafen', 'Aktiv': false, 'Beginndatum': '01.01.2020', 'Enddatum': '01.11.2020', 'Bike_ID': 2285 }
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
      'Bike_ID': 782,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "14.6.2021"
    },
    {
      'BikeService_ID': 3,
      'Serviceart': "Sattel austauschen",
      'Bike_ID': 782,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 4,
      'Serviceart': "Sattel einstellen",
      'Bike_ID': 1255,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "15.6.2021"
    },
    {
      'BikeService_ID': 5,
      'Serviceart': "Sattel austauschen",
      'Bike_ID': 1255,
      'Erstellungsdatum': "11.6.2021",
      'Bearbeitungsdatum': "17.6.2021"
    }
  ]

  const mergedList = reparatur_daten.map(t1 => ({ ...t1, ...customerData.find(t2 => t2.Bike_ID === t1.Bike_ID) }))

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  let table_content = []

  mergedList.forEach(e => {
    table_content.push(
      <TableRow>
        <TableCell align="center" component="th" scope="row">
          {e.Kunden_ID}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Nachname}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Bike_ID}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.BikeService_ID}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Serviceart}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Erstellungsdatum}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Bearbeitungsdatum}
        </TableCell>
      </TableRow>
    )
  });

  return (
    <div 
    // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}
    >
      <br></br>
      <br></br>
      <TableContainer align="center" component={Paper}>
        <Table className={useStyles.table} background-color="white" aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor:'#ffd364'}}>
              <TableCell align="center">Kunden_ID</TableCell>
              <TableCell align="center">Nachname</TableCell>
              <TableCell align="center">Bike_ID</TableCell>
              <TableCell align="center">BikeService_ID</TableCell>
              <TableCell align="center">Serviceart</TableCell>
              <TableCell align="center">Erstellungsdatum</TableCell>
              <TableCell align="center">Bearbeitungsdatum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table_content}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default order_planing;
