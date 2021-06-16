import "./customer_care.css"
import React, { Component }  from 'react';
import Mail from './../asset/mail.png'
import Phone from './../asset/phone.png'
import { TextField } from '@material-ui/core';

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

      <div>
        <table>
          <tr>
              <td>
                <div>
                  <img src={Phone} width="96" height="96" alt="Telefonnummer" style={{borderRadius: '10px'}}></img>
                </div>
              </td>
              <td>
              1234567890
              </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src={Mail} width="96" height="96" alt="E-Mail-Adresse" style={{borderRadius: '10px'}}></img>
              </div>
            </td>
            <td>
              beispiel@email.com
            </td>
          </tr>
        </table>  
      </div>
      
    <div>
      <h2>
        Kontaktformular
      </h2>
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
      //value={this.state.message}
      //onChange={(e) => this.setState({ message: e.target.value })}
      required
      type="text"
    />
    <br />
    <br />
    <br />

    <div className="button--container">
      <button type="submit" className="button button-primary">
        Submit
      </button>
    </div>
  </form>  
  </div>
  )
}

export default customer_care;
