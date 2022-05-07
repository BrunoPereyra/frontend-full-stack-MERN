import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chat } from "./components/Chat";
import Default from "./components/Default";
import Home from "./components/Home";
import Login from "./components/Login";
import Post_rise from "./components/Post_rise";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import './static/styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/posts/rise" component={Post_rise} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/chat" component={Chat} />
          <Route component={Default} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
