import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Notes from './pages/Notes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Home />} />
        <Route path='/notes' exact element={ <Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
