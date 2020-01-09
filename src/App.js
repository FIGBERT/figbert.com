import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/highLevel/homepage/";
import ContactPage from "./components/highLevel/contact";
import AboutPage from "./components/highLevel/about";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/figENC" />
        <Route path="/figbertMath" />
        <Route path="/blog" />
        <Route path="/world" />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
