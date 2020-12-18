import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Constacto from "./components/Constacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Constacto
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
        </div>
        <hr/>
        <Switch>
          <Route path ="/nosotros/:id">
            <User/>
          </Route>
        <Route path="/" exact>
            <Inicio/>
          </Route>
          <Route path="/contacto">
            <Constacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
