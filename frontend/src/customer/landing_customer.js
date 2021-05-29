import { Route, Link, Switch } from "react-router-dom";
import My_bike from "./my_bike"
import Find_bike from "./find_bike"
import Customer_overview from "./customer_overview"
import Customer_care from "./customer_care"

function Customer() {
  return (
    <span>
      <table>
        <tr>
           {/* Style Linien drum herum  */}
          <td>
            <Link to="/customer/my_bike">My_bike</Link>
          </td>
          <td>
            <Link to="/customer/find_bike">Find_bike</Link>
          </td>
          <td>
            <Link to="/customer/overview">customer_overview</Link>
          </td>
          <td>
            <Link to="/customer/care">customer_care</Link>
          </td>
        </tr>
      </table>
      <Switch>
        <Route exact path="/customer/my_bike" component={My_bike} />
        <Route exact path="/customer/find_bike" component={Find_bike} />
        <Route exact path="/customer/overview" component={Customer_overview} />
        <Route exact path="/customer/care" component={Customer_care} />
      </Switch>
    </span>

  );
}

export default Customer;
