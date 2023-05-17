import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserManagement from './components/user-management';
import CitySelectionPage from "./components/landing-page";
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CitySelectionPage />}></Route>
          <Route path="/profile" element={<UserManagement />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
