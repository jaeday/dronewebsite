import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import 'bootstrap';
import Ordersscreen from './screens/Ordersscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Route path="/" exact component ={Homescreen}/>
        <Route path="/cart" exact component ={Cartscreen}/>
        <Route path="/register" exact component={Registerscreen}/>
        <Route path="/login" exact component={Loginscreen}/>
        <Route path="/orders" exact component={Ordersscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
