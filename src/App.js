import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NotesPage from './pages/Notes'
import EditNotes from './pages/EditNotes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={ <Home />} />
        <Route path='/notes' exact element={ <NotesPage />} />
        <Route path='/edit/:id' element={ <EditNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
