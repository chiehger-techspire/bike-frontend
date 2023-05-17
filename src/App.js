import "./App.css";
import logo from './logo.png';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserManagement from './components/user-management';
import CitySelectionPage from "./components/landing-page";
import Contact from './components/contact';
import ProductPage from "./components/product-desc";

function App() {
  const dummyProduct = {
    name: 'Some Bike',
    description: 'Its a bike',
  }
  return (
    <Router>
      <div>
        <div style={{ height: '58px', background: '#0F375A', display: 'flex' }}>
          <span style={{ color: '#FFFFFF', marginLeft: '30px', fontSize: '2rem' }}>
            <img src={logo} width="40" />
            <span style={{ marginLeft: '10px' }}>Rent-A-Bike</span>
          </span>
          <nav>
            <ul style={{ listStyleType: 'none', marginTop: '10px' }}>
              <li style={{ display: 'inline' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '20px' }}>Home</Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/profile" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '20px' }}>Profile</Link>
              </li>
              <li style={{ display: 'inline' }}>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#FFFFFF', marginRight: '20px' }}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<CitySelectionPage />}></Route>
          <Route path="/profile" element={<UserManagement />}></Route>
          <Route path="/product-desc" element={<ProductPage product={dummyProduct} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
