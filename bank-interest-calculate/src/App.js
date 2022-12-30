import './App.css';
import Control from './components/Control';
import TableResult from './components/TableResult';
import Header from "./components/Header"

function App() {
  return (
    <div className="App" style={{justifyContent: "center", alignItems:"center", width: "100%", textAlign:"center", marginTop: 20, marginBottom: 50}}>
      <Header />
      <Control />
      <TableResult />
    </div>
  );
}

export default App;
