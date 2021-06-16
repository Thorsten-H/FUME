import "./customer_care.css"
import React, { Component }  from 'react';
import Mail from './../asset/mail.png'
import Phone from './../asset/phone.png'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

function customer_care() {
  
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
    
      <form className="contact-form" onSubmit={(e) => {}}>
        <br />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
          style={{ border: '1px solid #ffd364', width:'500px'}}
          //value={this.state.name}
          //onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <TextField
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          style={{ border: '1px solid #ffd364', width:'500px'}}
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
          style={{ border: '1px solid #ffd364', width:'500px'}}
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
          style={{ border: '1px solid #ffd364', width:'500px'}}
          //value={this.state.message}
          //onChange={(e) => this.setState({ message: e.target.value })}
          required
          type="text"
        />
        <br />
        <br />
        <br />

        <div className="button--container">
          <Button style={{ width:'500px', backgroundColor: "#ffd364", color:"black"}} variant="contained" color="primary">
          Submit
          </Button>
      </div>
    </form>  
  </div>
  )
}

export default customer_care;
