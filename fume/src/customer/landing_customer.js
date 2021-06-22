import { Route, Link, Switch } from "react-router-dom";
import My_bike from "./my_bike"
import Find_bike from "./find_bike"
import Customer_overview from "./customer_overview"
import Customer_care from "./customer_care"
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import logo from './../FUME_logo.png'


function Customer() {
  return (
    <div>
      <div>
        <table>
          <tr >
            <td>
              <Button component={Link} style={{ backgroundColor: "#ffd364", borderRadius: '5px', border:'none'}} to="/">
                <img src={logo} alt="FUME-Logo" style={{height:'60px'}}/>
              </Button>
            </td>
            <td >
              <input style={{ backgroundColor: "#1a9988", border:'none', width:'150px'}}/>
            </td>
            <td>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer/my_bike">My Bike</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer/find_bike">Find My Bike</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer/overview">My Overview</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer/care">My Care</Button>
              </ButtonGroup>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Switch>
          <Route exact path="/customer/my_bike" component={My_bike} />
          <Route exact path="/customer/find_bike" component={Find_bike} />
          <Route exact path="/customer/overview" component={Customer_overview} />
          <Route exact path="/customer/care" component={Customer_care} />
        </Switch>
      </div>
    </div>
  );
}

export default Customer;
