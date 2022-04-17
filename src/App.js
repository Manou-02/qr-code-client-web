import logo from './logo.svg';
import './App.css';
import TableUser from './components/TableUser';
import TablePresence from './components/TablePresence';



function App() {
  return (
    <div className="App">
        Client web

        <TableUser />
        
        <TablePresence />
    </div>
  );
}

export default App;
