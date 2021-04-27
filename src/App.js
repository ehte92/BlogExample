import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeContent from "./pages/HomeContent";
import BlogContent from "./pages/BlogContent";
import BlogPage from "./components/BlogPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeContent} />
        <Route path="/blogs" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
