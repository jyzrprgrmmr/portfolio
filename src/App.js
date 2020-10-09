import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Particles from 'react-particles-js';
import Footer from './components/Footer'
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
      <Router className="container" basename={process.env.PUBLIC_URL}>
      <Particles canvasClassName="particles"
                params={{
                  "particles": {
                    "number": {
                      "value": 100
                      },
                    "color": {
                      "value": "#000000"
                      },
                    "size": {
                      "value": 2
                      }
                    }
                }}/>
        
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/work" exact component={Work}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        
      </Router>
      <Footer/>
      
      
    </>
      
  );
}

export default App;
