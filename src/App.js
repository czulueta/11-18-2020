import React from "react"
import {Link} from "react-router-dom"
import Home from "./Homne"
import About from "./About"
import Services from "./Services"


function App() {
  return (
    <div>
      <navbar>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </navbar>
      <form>
        <input placeholder="First Name" name="firstName" value="firstName"/>
      </form>
    </div>
  );
}

export default App;
