import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Salesdashboard from "./salesdashboard"
import Customerdashboard from "./customerdashboard"
import Workshop_planing from "./workshop_planing"
import Order_planing from "./order_planing"
import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';


function Customer_B() {
  return (
    <div>
      <div>
        <table align='right'>
          <tr >
            <td>
              <Button component={Link} style={{ backgroundColor: "#ffd364", borderRadius: "30px"}} to="/customer_b/sales">Sales Dashboard</Button>
            </td>
            <td>
              <Button component={Link} style={{ backgroundColor: "#ffd364", borderRadius: "30px"}} to="/customer_b/customer">Kundenübersicht</Button>
            </td>
            <td>
              <Button component={Link} style={{ backgroundColor: "#ffd364", borderRadius: "30px"}} to="/customer_b/workshop_planing">Werkstattplanung</Button>
            </td>
            <td>
              <Button component={Link} style={{ backgroundColor: "#ffd364", borderRadius: "30px"}} to="/customer_b/order_planing">Auftragsplanung</Button>
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