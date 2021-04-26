import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeContent from "./pages/HomeContent";
import BlogContent from "./pages/BlogContent";
import TestC from "./components/TestC";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/blogs" component={BlogContent} />
        <Route path="/test" component={TestC} />
      </Switch>
    </Router>
  );
}

export default App;
