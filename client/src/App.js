// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {ParkProvider} from './data/store';

function App() {
  return (
    <div className="App">
      <ParkProvider>
        <Dashboard />
      </ParkProvider>
    </div>
  );
}

export default App;
