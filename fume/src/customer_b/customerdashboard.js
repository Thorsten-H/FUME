import "./customerdashboard.css"

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';



function customerdashboard() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const customerData = [
    { 'Kunden_ID': '99523', 'Vorname': 'Sigfried', 'Nachname': 'Abram', 'Adresse': 'Viehhofstraße 26 68165 Mannheim', 'Aktiv': true, 'Beginndatum': '01.01.2020', 'Enddatum': '-', 'Bike_ID': 782 },
    { 'Kunden_ID': '11972', 'Vorname': 'Sophia', 'Nachname': 'Klatten', 'Adresse': 'Mercedes-Benz-Straße 12 15672 Ingolstadt', 'Aktiv': true, 'Beginndatum': '01.01.2020', 'Enddatum': '-', 'Bike_ID': 1248 },
    { 'Kunden_ID': '1342', 'Vorname': 'Judith', 'Nachname': 'Wangkirchen', 'Adresse': 'Q8 15 68168 Mannheim', 'Aktiv': false, 'Beginndatum': '01.01.2020', 'Enddatum': '01.04.2021', 'Bike_ID': 1255 },
    { 'Kunden_ID': '67', 'Vorname': 'Aaron', 'Nachname': 'Abelsberg', 'Adresse': 'Mannheimerweg 12 65142 Ludwigshafen', 'Aktiv': false, 'Beginndatum': '01.01.2020', 'Enddatum': '01.11.2020', 'Bike_ID': 2285 }
  ]

  customerData.sort(function (a, b) {
    if (a.Aktiv != b.Aktiv) {
      return b.Aktiv ? 1 : -1;
    }
    if (a.Nachname != b.Nachname) {
      return a.Nachname - b.Nachname; // descending
    }
  });

  let table_content = []

  customerData.forEach(e => {
    console.log(e.Aktiv)
    table_content.push(
      <TableRow>
        <TableCell align="center" component="th" scope="row">
          {e.Kunden_ID}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Vorname}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Nachname}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Adresse}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Beginndatum}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Enddatum}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Aktiv.toString()}
        </TableCell>
      </TableRow>  
    )
  });
  console.log(table_content)
  return (
    <div width="20vh">
      <br></br>
      <br></br>
      <TableContainer align="center" component={Paper}>
        <Table className={useStyles.table} background-color="white" aria-label="simple table">
          <TableHead>
            <TableRow style={{ backgroundColor:'#ffd364'}}>
              <TableCell align="center">Kunden_ID</TableCell>
              <TableCell align="center">Vorname</TableCell>
              <TableCell align="center">Nachname</TableCell>
              <TableCell align="center">Adresse</TableCell>
              <TableCell align="center">Beginndatum</TableCell>
              <TableCell align="center">Enddatum</TableCell>
              <TableCell align="center">Aktiv</TableCell>
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


export default customerdashboard;