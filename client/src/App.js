import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailPage from "./components/detail_page/DetailPage";
import HomePage from "./components/home_page/HomePage";
import NavigationBar from "./components/NavigationBar";
import SearchPage from "./components/search_page/SearchPage";

function App(props) {
  return (
    <Router>
      <div style={{ backgroundColor: "#F0F2F5", height: "100%" }}>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post/search/:search" component={SearchPage} />
          <Route exact path="/post/:id" component={DetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
