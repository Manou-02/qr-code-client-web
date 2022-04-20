import './App.css';
import TableUser from './components/TableUser';
import TablePresence from './components/TablePresence';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        Client web
        <h1 className="text-3xl font-bold underline">
              Hello world!
        </h1>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <TableUser />
            </Route>
            <Route path="/presence">
              <TablePresence />
            </Route>
          </Switch>
        </Router>

        {/* <TableUser /> */}
        
        {/* <TablePresence /> */}
    </div>
  );
}

export default App;
