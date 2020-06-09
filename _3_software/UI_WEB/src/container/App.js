import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from '../component/Navbar'
import Footer from './Footer'
import Lampe from './Lampe'
import Pomodoro from './Pomodoro'

class App extends Component {
  state = {
    activePage: 'lampe'
  }

  callback_activePage = (activePage) => {
    this.setState({ activePage: activePage })
  }

  render() {
    return (
      <Router>
        <Navbar activeItem={this.state.activePage} />
        <Switch>
          <Route path="/" exact>
            <Lampe activePage={this.callback_activePage} />
          </Route>/>
          <Route path="/lampe">
            <Lampe activePage={this.callback_activePage} />
          </Route>/>
          <Route path="/pomodoro">
            <Pomodoro activePage={this.callback_activePage} />
          </Route>/>
        </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App;
