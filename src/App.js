import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddMovie from './components/AddMovie';
import Catalog from './components/Catalog';
import PickMovie from './components/PickMovie';
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
          <Header/>
          <Routes>
              <Route path="/" element={<Catalog/>}></Route>
              <Route path="/add" element={<AddMovie/>}></Route>
              <Route path="/movie" element={<PickMovie/>}></Route>
          </Routes>
      </Router>

    </div>
  );
}

export default App;
