import { Route, Switch } from "react-router-dom";
import './App.css';
import './Sample.less';
import React from 'react';
import 'react-calendar/dist/Calendar.css';

import Landing from "./Landing"
import Customer from "./customer/landing_customer"
import Customer_B from "./customer_b/landing_customer_b"

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route path="/customer/" component={Customer} />
        <Route path="/customer_b/" component={Customer_B} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;