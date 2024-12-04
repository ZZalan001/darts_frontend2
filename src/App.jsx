import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { DartsList } from './DartsList';
import { DartsSingle } from './DartsSingle';
import { DartsCreate } from './DartsCreate';
import { DartsDelete } from './DartsDelete';
import { DartsModify } from './DartsModify';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
               <span className="nav-link">Dartsozók</span>
              </NavLink>
            </li>
            </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<DartsList />} />
        <Route path="/darts/:dartsId" element={<DartsSingle />} />
        <Route path="/darts-create" element={<DartsCreate />} />
        <Route path="/darts-delete/:dartsId" element={<DartsDelete />} />
        <Route path="/darts-modify/:dartsId" element={<DartsModify />} />
      </Routes>
    </Router>
  );
}