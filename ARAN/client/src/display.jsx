import React, { useState } from 'react';
import './home.css';

function Home() {
  const [vehicleType, setVehicleType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [gearType, setGearType] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [year, setYear] = useState('');
  const [partType, setPartType] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleVehicleChange = (event) => {
    setVehicleType(event.target.value);
    setFuelType('');
    setGearType('');
    setCompanyName('');
    setYear('');
  };

  const handleFuelChange = (event) => {
    setFuelType(event.target.value);
    setGearType(''); 
  };

  const handleGearChange = (event) => {
    setGearType(event.target.value);
  };

  const handlePartType = (event) => {
    setPartType(event.target.value);
  }

  const handleCompanyChange = (event) => {
    setCompanyName(event.target.value);
    setYear('');
  };

  const getYearsForCompany = (company) => {
    const currentYear = new Date().getFullYear();
    switch (company) {
      case 'BMW':
        return Array.from({ length: 20 }, (_, index) => currentYear - index);
      case 'Tata':
        return Array.from({ length: 5 }, (_, index) => currentYear - index);
      case 'Mahindra':
        return Array.from({ length: 6 }, (_, index) => currentYear - index);
      default:
        return [];
    }
  };

  return (
    <div className="Home">
      <header>
        <h1 onClick={() => setShowSearch(!showSearch)}>ARAN</h1>
        {showSearch && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        )}
        <div className="profile">
          <a href="#profile" onClick={(e) => {
            e.preventDefault();
            setShowLogin(!showLogin);
          }}>User Profile</a>
        </div>
      </header>

      <main>
        <div id='types'>
     
      <footer>
        <div className="car-images">
          <img src="https://carswitch.com/newsroom/wp-content/uploads/2023/02/The-Most-Common-Spare-Parts-Used-in-Vehicles-730-393-1.jpg" alt="car" />
          <img src="https://content.jdmagicbox.com/comp/mumbai/c9/9999p8451.8451.101007215937.g7c9/catalogue/national-auto-parts-zahirabad-ho-zahirabad-automobile-accessory-dealers-9tze3valvh.jpg?clr=" alt="bike" />
          <img src="https://l450v.alamy.com/450v/g2rnk7/images-truck-assembled-from-new-spare-parts-g2rnk7.jpg" alt="Truck" />
          <img src="https://image.made-in-china.com/201f0j00iCLcZQUROukW/Perfectrail-4X4-Car-Accessories-Auto-Engine-Body-Kit-Spare-Parts-for-Ford-Transit-Custom-Bus-Cargo-Van-Connect-Mk7-Mk8.webp" alt="Car 4" />
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AerlRtADq2ZrALggWeqiXA.jpeg" alt="Car 5" />
        </div>
        <p>&copy; 2024 My Web Page</p>
      </footer>
    </div>
  );
}

export default Home;
