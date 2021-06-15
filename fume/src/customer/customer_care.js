import React, { Component }  from 'react';
import {Mail} from './../asset/mail.png'
import {Phone} from './../asset/phone.png'
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
      <tr>

      </tr>
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
      rowsMax={4}
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
