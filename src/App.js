import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
