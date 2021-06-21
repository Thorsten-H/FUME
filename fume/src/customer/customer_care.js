import "./customer_care.css"
import React, { Component }  from 'react';
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






 {/* <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          style={{ border: '1px solid #ffd364', width:'500px', borderRadius:'5px'}}
          //value={this.state.name}
          //onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br /> */}

        {/* <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          style={{ border: '1px solid #ffd364', width:'500px', borderRadius:'5px'}}
          //value={this.state.email}
          //onChange={(e) => this.handleChangeEmail(e)}
          //error={this.state.emailError}
          required
          type="email"
        />
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
          style={{ border: '1px solid #ffd364', width:'500px', borderRadius:'5px'}}
          //value={this.state.subject}
          //onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        <br />

        <TextField
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Enter Message"
          variant="outlined"
          multiline
          rowsMax={8}
          style={{ border: '1px solid #ffd364', width:'500px', borderRadius:'5px'}}
          //value={this.state.message}
          //onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br /> */}