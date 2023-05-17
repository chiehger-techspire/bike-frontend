import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserManagement from './components/user-management';
import CitySelectionPage from "./components/landing-page";
import Contact from './components/contact';
import BicycleGrid from './components/bike-grid';

function App() {
  return (
    <Router>
      <div>
        <div style={{ height: '50px', background: '#0F375A', display: 'flex' }}>
          <span style={{ color: '#FFFFFF', marginLeft: '30px', fontSize: '2rem' }}>Rent-A-Bike</span>
          <nav>
            <ul style={{ listStyleType: 'none' }}>
              <li style={{ display: 'inline' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '10px' }}>Home</Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/profile" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '10px' }}>Profile</Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '10px' }}>Contact</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<CitySelectionPage />}></Route>
            <Route path="/profile" element={<UserManagement />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
      <div className="App">
        {/* <BikeRental /> */}
        <BicycleGrid />
      </div>
    </Router>
  );
}

export default App;
