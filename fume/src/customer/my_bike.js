import "./my_bike.css"
import React  from 'react';
import bike from './../asset/bike_fume.png'
import { Select, MenuItem, FormControl,InputLabel } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function My_bike() {
  const [defekt, setDefekt] = React.useState(0);

  const handleChange = event => {
    setDefekt(event.target.value);
  };

  return (
    <div> 
      <div >
        <img usemap="#bike" src={bike} width="735" height="439" alt="Fahrrad" style={{borderRadius: '10px', borderStyle: "solid", borderColor: '#ffd364', margin: '30px'}}/>
        <map name ="bike">
          <area id = "Vorderreifen" shape="rect" coords="57,325,251,376"  value={1} onClick={handleChange} alt="Vorderreifen"></area>
          <area id = "Frontlicht"   shape="rect" coords="21,144,178,195"  value={2} onClick={handleChange} alt="Vorderlicht"></area>
          <area id = "Pedal"        shape="rect" coords="305,349,431,402" value={3} onClick={handleChange} alt="Pedal"></area>
          <area id = "Lenkrad"      shape="rect" coords="19,28,162,77"    value={4} onClick={handleChange} alt="Lenkrad"></area>
          <area id = "Sattel"       shape="rect" coords="527,21,653,75"   value={5} onClick={handleChange} alt="Sattel"></area>
          <area id = "Schaltung"    shape="rect" coords="361,201,526,253" value={6} onClick={handleChange} alt="Schaltung"></area>
          <area id = "Rücklicht"    shape="rect" coords="546,148,706,201" value={7} onClick={handleChange} alt="Rücklicht"></area>
          <area id = "Hinterreifen" shape="rect" coords="493,324,689,377" value={8} onClick={handleChange} alt="Hinterreifen"></area>
        </map>
      </div>        

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <div style={{backgroundColor: "white", borderRadius: '10px', width: '800px', display: 'flex',  justifyContent:'center', padding: '10px', alignItems:'center'}}>
          <h3>
            Fehlermeldung anlegen
          </h3>         
          <div>
            <form  className="contact-form" onSubmit={(e) => {}} >
              <table cellspacing="5" cellpadding="8" align="center" valign="top">
                <tr>
                  <br />
                  <td>
                    <FormControl style={{width:"150px"}}>
                      <InputLabel id="defekt-label">Fehlerquelle</InputLabel>
                      <Select labelId="defekt-label" id="defekt-select" value={defekt} onChange={handleChange}>
                        <MenuItem value={1}>Vorderreifen</MenuItem>
                        <MenuItem value={2}>Frontlicht</MenuItem>
                        <MenuItem value={3}>Pedal</MenuItem>
                        <MenuItem value={4}>Lenkrad</MenuItem>
                        <MenuItem value={5}>Sattel</MenuItem>
                        <MenuItem value={6}>Schaltung</MenuItem>
                        <MenuItem value={7}>Rücklicht</MenuItem>
                        <MenuItem value={8}>Hinterreifen</MenuItem>
                        <MenuItem value={9}>Diebstahl</MenuItem>
                        <MenuItem value={0}>Sonstiges</MenuItem>
                      </Select>
                    </FormControl>
                  </td>

                  <td>
                    <TextField id="errordescription" placeholder="Fehlerbeschreibung einfügen" label="Fehlerbeschreibung" variant="outlined" style={{width:'300px', color:'red'}} required type="text"/>
                  </td>
                  <br />
                  <td>
                    <div className="button--container">
                      <Button onClick={handleChange} style={{ width:'70px', backgroundColor: "#ffd364", color:"black"}} variant="contained" color="primary">
                        Submit
                      </Button>
                    </div>
                  </td>
                </tr>
              </table> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default My_bike;
