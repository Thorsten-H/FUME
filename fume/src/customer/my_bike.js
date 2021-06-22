import "./my_bike.css"
import React  from 'react';
import bike from './../asset/bike_fume.png'
import { Select, MenuItem, FormControl,InputLabel, makeStyles } from "@material-ui/core";
import { TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { mergeClasses } from "@material-ui/styles";



function My_bike() {

  // const useStyles = makeStyles(theme => ({  
  // formControl: {
  //   minWidth: 100
  //   }
  // }))

  //const classes = useStyles();
  const [errorsource, setErrorsource] = React.useState('');
  const handleChange = (event) => {
    setErrorsource(event.target.value);
  };


  function clearData()
  {  
  document.getElementById('errordescription').value = "";
  setErrorsource("")
  }

  function changeDropdown(e)
  {
  //setErrorsource(e);
  }


  return (

    
    <div> 

      <div >
        <img usemap="#bike" src={bike} width="735" height="439" alt="Fahrrad" style={{borderRadius: '10px', borderStyle: "solid", borderColor: '#ffd364', margin: '30px'}}/>
        <map name ="bike">
          <area id = "Vorderreifen" shape="rect" coords="57,325,251,376" onClick={changeDropdown("Vorderreifen")}  alt="Vorderreifen" href="#/customer/my_bike"></area>
          <area id = "Frontlicht" shape="rect" coords="21,144,178,195" onClick={changeDropdown("Frontlicht")} alt="Vorderlicht" href="#/customer/my_bike"></area>
          <area id = "Pedal" shape="rect" coords="305,349,431,402" onClick={changeDropdown("Pedal")} alt="Pedal" href="#/customer/my_bike"></area>
          <area id = "Lenkrad" shape="rect" coords="19,28,162,77" onClick={changeDropdown("Lenkrad")} alt="Lenkrad" href="#/customer/my_bike"></area>
          <area id = "Sattel" shape="rect" coords="527,21,653,75" onClick={changeDropdown("Sattel")} alt="Sattel" href="#/customer/my_bike"></area>
          <area id = "Schaltung" shape="rect" coords="361,201,526,253" onClick={changeDropdown("Schaltung")} alt="Schaltung" href="#/customer/my_bike"></area>
          <area id = "Rücklicht" shape="rect" coords="546,148,706,201" onClick={changeDropdown("Rücklicht")} alt="Rücklicht" href="#/customer/my_bike"></area>
          <area id = "Hinterreifen" shape="rect" coords="493,324,689,377" onClick={changeDropdown("Hinterreifen")} alt="Hinterreifen" href="#/customer/my_bike"></area>
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
                <FormControl className={mergeClasses.formControl} style={{width:"150px"}}>
                  <InputLabel>Fehlerquelle</InputLabel>
                  <Select 
                  value={errorsource}
                  onChange={handleChange}>
                    <MenuItem value={"Vorderreifen"}>Vorderreifen</MenuItem>
                    <MenuItem value={"Frontlicht"}>Frontlicht</MenuItem>
                    <MenuItem value={"Pedal"}>Pedal</MenuItem>
                    <MenuItem value={"Lenkrad"}>Lenkrad</MenuItem>
                    <MenuItem value={"Sattel"}>Sattel</MenuItem>
                    <MenuItem value={"Schaltung"}>Schaltung</MenuItem>
                    <MenuItem value={"Rücklicht"}>Rücklicht</MenuItem>
                    <MenuItem value={"Hinterreifen"}>Hinterreifen</MenuItem>
                    <MenuItem value={"Diebstahl"}>Diebstahl</MenuItem>
                    <MenuItem value={"Sonstiges"}> Sonstiges</MenuItem>
                  </Select>
                 </FormControl>
                </td>

              <td><TextField
                id="errordescription"
                placeholder="Fehlerbeschreibung einfügen"
                label="Fehlerbeschreibung"
                variant="outlined"
                style={{width:'300px', color:'red'}}
                //value={this.state.name}
                //onChange={(e) => this.setState({ name: e.target.value })}
                required
                type="text"
              />
              </td>
              <br />
              <td>
              <div className="button--container">
                <Button onClick= {clearData} style={{ width:'70px', backgroundColor: "#ffd364", color:"black"}} variant="contained" color="primary">
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
