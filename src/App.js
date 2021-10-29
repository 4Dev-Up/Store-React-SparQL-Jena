import "./App.css";
import Home from "./pages/home";
import Department from "./pages/department";
import Worksunder from "./pages/worksunder";
import AllEmployees from "./pages/allEmployees";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/allemployees" exact component={AllEmployees} />
            <Route path="/department" exact component={Department} />
            <Route path="/director" exact component={Worksunder} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
