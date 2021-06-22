import {Table, TableHead, TableBody, TableCell, TableRow, TableContainer} from '@material-ui/core';
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
    { 'Kunden_ID': '99523', 'Vorname': 'Sigfried', 'Nachname': 'Abram', 'Alter': "40",'Adresse': 'Viehhofstraße 26 68165 Mannheim', "Radius": ">10km", "Kommunikation": "E-Mail, Telefon, Persönlich", 'Aktiv': true, 'Beginndatum': '01.01.2020', 'Enddatum': 'Datum'}
  ]

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
      <table>
        <tr>
          <td>
            <div>
            <br></br>
              <img id='siegfried' src={siegfried} width="120" height="120" alt="Siegfried" style={{borderRadius: '50%',
                                                                                                   display:'inline-block', 
                                                                                                   padding:'3px', 
                                                                                                   float: 'center', 
                                                                                                   borderStyle: 'solid', 
                                                                                                   borderColor: '#ffffff', 
                                                                                                   backgroundColor: '#ffffff',
                                                                                                   marginTop: '8%' 
                                                                                                    }} />
             
              <br />
            </div>
          </td>
        </tr> 
        <tr>
          <td>
          <div width="10px" style={{display:'inline-block', float:'left', textAlign:"right"}}>
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

          </div>
          </td>
        </tr>
        <br></br>
        <tr>
          <td>
            <div>
            {/* <Button style={{ width:'150px', height:"50px", backgroundColor: "#ffd364", color:"black", margin:"10px"}} variant="contained" color="primary">
                Kontaktdaten ändern
            </Button> */}
            <Button style={{ width:'150px', height:"50px", backgroundColor: "red", color:"black", margin:"10px"}} variant="contained" color="primary">
                      Abo pausieren
            </Button>
            <Button style={{ width:'150px', height:"50px", backgroundColor: "red", color:"black", margin:"10px"}} variant="contained" color="primary">
                      kündigen
            </Button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
export default customer_overview;
