import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio';
import Gallery from './Components/Gallery/Gallery'
import Home from './Components/Home/Home'
import Navigation from './Components/Navigation/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

 

  onButtonClick = () => {
    
    console.log('works')
  }

render(){
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        
      </div>
    </Router>  
  );
}

}
export default App;
