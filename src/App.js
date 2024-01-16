import AllRoute from './AllRoute';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <AllRoute/>
      </Router>
    </div>
  );
}

export default App;
