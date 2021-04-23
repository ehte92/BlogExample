import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeContent from "./pages/HomeContent";
import BlogContent from "./pages/BlogContent";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/blogs" component={BlogContent} />
      </Switch>
    </Router>
  );
}

export default App;
