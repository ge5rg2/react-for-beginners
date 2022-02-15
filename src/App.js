import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { Reset } from "styled-reset";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Reset />
          <Detail />
        </Route>
        <Route path="/">
          <Reset />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
