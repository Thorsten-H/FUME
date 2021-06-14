import { Link } from "react-router-dom";
import './App.css';
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import logo from './FUME_logo.png';

function App() {
    return (
        <div>
            <div>
                <br></br>
                <img src={logo} alt="FUME-Logo" />
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <ButtonGroup size="large" color="#3f6d7b" aria-label="large outlined primary button group">
                    <Button component={Link} style={{ backgroundColor: "#ffd364"}} to="/customer" >Customer</Button>
                    <Button component={Link} style={{ backgroundColor: "#ffd364"}} to="/customer_b/" >Business</Button>
                </ButtonGroup>
            </div>
            
        </div>
    );
}

export default App;
