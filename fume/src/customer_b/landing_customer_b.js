import { Route, Link, Switch } from "react-router-dom";
import Salesdashboard from "./salesdashboard"
import Customerdashboard from "./customerdashboard"
import Workshop_planing from "./workshop_planing"
import Order_planing from "./order_planing"
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import logo from './../FUME_logo.png'

function Customer_B() {
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
            <td style={{paddingRight:"100px"}}>
            </td>
            <td>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer_b/sales">   Sales Dashboard</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer_b/customer">Kundenübersicht</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer_b/workshop_planing">Werkstattplanung</Button>
                <Button component={Link} style={{ color: "#ffd364", borderColor: "#ffd364", height:'70px', width:'200px'}} to="/customer_b/order_planing">Auftragsplanung</Button>
              </ButtonGroup>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Switch>
          <Route exact path="/customer_b/sales" component={Salesdashboard} />
          <Route exact path="/customer_b/customer" component={Customerdashboard} />
          <Route exact path="/customer_b/workshop_planing" component={Workshop_planing} />
          <Route exact path="/customer_b/order_planing" component={Order_planing} />
        </Switch>
      </div>
    </div>
  );
}

export default Customer_B;