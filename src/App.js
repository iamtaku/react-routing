import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import React from "react";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
