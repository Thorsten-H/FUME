import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import siegfried from './../asset/Siegfried2.png'


function customer_overview() {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const customerData = [
    { 'Kunden_ID': '14', 'Vorname': 'Siegfried', 'Nachname': 'Bern', 'Alter':'40', 'Adresse': 'Steubenstraße 76 68169 Mannheim', 'Radius':'>10km', 'Kommunikation':'E-Mail, Telefon. Persönlich', 'Aktiv': true, 'Beginndatum': '01.01.2021', 'Enddatum': 'Datum' },
    // { 'Kunden_ID': '45564351', 'Vorname': 'Niklas', 'Nachname': 'Müller', 'Adresse': 'Müllerstraße 555 64521 Groß Gerau', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    // { 'Kunden_ID': '12345', 'Vorname': 'Simon', 'Nachname': 'Stein', 'Adresse': 'Q 8 68161 Mannheim', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    // { 'Kunden_ID': '55', 'Vorname': 'Andres', 'Nachname': 'Gärtner', 'Adresse': 'Zeil 155 64135 Frankfurt', 'Aktiv': true, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' },
    // { 'Kunden_ID': '2345310', 'Vorname': 'Thorsten', 'Nachname': 'Becker', 'Adresse': 'Bäckerstraße 3 63215 Darmstadt', 'Aktiv': false, 'Beginndatum': 'Datum', 'Enddatum': 'Datum' }
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
          {e.Vorname}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Nachname}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Alter}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Adresse}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Radius}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Kommunikation}
        </TableCell>
        <TableCell align="center" component="th" scope="row">
          {e.Beginndatum}
        </TableCell>
      </TableRow>  
    )
  });
  console.log(table_content)
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 

      <div >
        <br></br>
        <br></br>
        <img  src={siegfried} width="400" height="300" alt="Siegfried" style={{borderRadius: '10px', display:'inline-block', float: 'left'}}/>
      </div>


      <div width="10px" style={{display:'inline-block', float:'left', textAlign:"right"}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <TableContainer align="center" component={Paper}>
            <Table className={useStyles.table} background-color="white" aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor:'#ffd364'}}>
                  <TableCell align="center">Vorname</TableCell>
                  <TableCell align="center">Nachname</TableCell>
                  <TableCell align="center">Alter</TableCell>
                  <TableCell align="center">Adresse</TableCell>
                  <TableCell align="center">Radius</TableCell>
                  <TableCell align="center">Kommunikation</TableCell>
                  <TableCell align="center">Beginndatum</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table_content}
              </TableBody>
            </Table>
          </TableContainer>
          <Button style={{ width:'100px', backgroundColor: "red", color:"black", margin:"10px"}} variant="contained" color="primary">
                  kündigen
                </Button>
        </div>

      </div>
  );
}
export default customer_overview;
