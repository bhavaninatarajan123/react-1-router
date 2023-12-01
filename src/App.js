import logo from './logo.svg';
import './App.css';
import{Route,Routes} from "react-router-dom";
import Home from './Home';
import Portfolio from './Protfolio';
import Team from './Team';
import Contact from './Contact';
import {Link} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header>
                <div className="logo-1">
                    butterfly
                </div>
                <div id="display-menu-1">
                <Link className="menu" to={"/"}>Home</Link>
                <Link className="menu" to={"/login"}>login</Link>
                <Link className="menu" to={"/Dashboard"}>Dashboard</Link>
                <Link className="menu" to={"/portpolio"}>Portfolio</Link>
                <Link className="menu" to={"/Team"}>Team</Link>
                <Link className="menu" to={"/Contact"}>Contact</Link>
                </div>
                </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portpolio" element={<Portfolio/>}/>
        <Route path="Team" element={<Team/>}/>
        <Route path="Contact" element={<Contact/>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
      </Routes>
     
    
    </div>
    
  );
}

export default App;