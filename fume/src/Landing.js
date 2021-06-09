import { Link } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>
            <Link to="/customer/">Customer</Link>
            <Link to="/customer_b/">Business</Link>
        </>
    );
}

export default App;
