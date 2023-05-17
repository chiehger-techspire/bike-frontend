import logo from './logo.svg';
import './App.css';
import BikeRental from './components/bike-rental';
import BicycleGrid from './components/bike-grid';

function App() {
  return (
    <div>
      <div style={{ height: '50px', background: '#0F375A' }}>
        <span style={{ color: '#FFFFFF', marginLeft: '30px', fontSize: '2rem' }}>Rent-A-Bike</span>
      </div>
      <div className='App'>
        {/* <BikeRental /> */}
        <BicycleGrid />
      </div>
    </div>
  );
}

export default App;
