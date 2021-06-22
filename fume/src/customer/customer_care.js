import "./customer_care.css"
import React from 'react';
import Mail from './../asset/mail.png'
import Phone from './../asset/phone.png'
import {InputBase, makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';

function customer_care() {
  
  function clearData()
  {  
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('subject').value = "";
  document.getElementById('message').value = "";
  }


  const UseStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },   
    },
  
    inputBase:{
      border: '1px solid #ffd364',
      borderRadius: theme.shape.borderRadius,
      height: "7vh",
      width: '500px',
      padding: theme.spacing(2)
    }
  }));

  const classes = UseStyles();


  // data = {
  //   name: "",
  //   message: "",
  //   email: "",
  //   subject: "",
  //   sent: false,
  //   buttonText: "Send Message",
  //   emailError: false,
  // };
  return (
    <div>
      <br></br>
      <br></br>      
      <div>
        <h2>
          Kontaktformular
        </h2>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        <table>
          <tr>
              <td>
                <div>
                  <img src={Phone} width="20" height="20" alt="Telefonnummer" style={{borderRadius: '10px'}}></img>
                </div>
              </td>
              <td>
              1234567890
              </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={Mail} width="20" height="20" alt="E-Mail-Adresse" style={{borderRadius: '10px'}}></img>
              </div>
            </td>
            <td>
              Care@FU.ME
            </td>
          </tr>
        </table>  
      </div>
    
      <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {}}>
        <br />
        <br />

        <InputBase
          id="name" 
          placeholder="*Name" 
          variant="outlined" 
          className={classes.inputBase}
          required
        />
        <br />
        <br />

        <InputBase
          id="email" 
          placeholder="*Email" 
          variant="outlined" 
          className={classes.inputBase}
          required
        />
        <br />
        <br />

        <InputBase
          id="subject" 
          placeholder="*Subject" 
          variant="outlined" 
          className={classes.inputBase}
          required
        />
        <br />
        <br />

        <InputBase
          id="message" 
          placeholder="*Message" 
          variant="outlined" 
          className={classes.inputBase}
          required
          multiline
          rowsMax={8}
        />   

        <br/>
        <br/>
        
        <Button onClick = {clearData} style={{ width:'500px', backgroundColor: "#ffd364", color:"black", margin:"center"}} variant="contained" color="primary">
          Submit
        </Button>

    </form>  
  </div>
  )
}

export default customer_care;