import React, { useState, useEffect } from 'react';
import '../../LandingPage.css';

const LandingPage = ({onNavigateToListing} ) => {
  const [currentCar, setCurrentCar] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sportsCars = [
    {
      id: 1,
      name: "Porsche 911 Turbo S",
      price: "$203,500",
      horsepower: "640 HP",
      acceleration: "2.6s",
      topSpeed: "205 mph",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "GT Silver Metallic",
      description: "The pinnacle of sports car engineering with unmatched performance and luxury."
    },
    {
      id: 2,
      name: "Lamborghini Aventador SVJ",
      price: "$517,770",
      horsepower: "759 HP",
      acceleration: "2.8s",
      topSpeed: "217 mph",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      color: "Arancio Borealis",
      description: "Extreme design meets cutting-edge technology in this Italian masterpiece."
    },
    {
      id: 3,
      name: "Ferrari SF90 Stradale",
      price: "$625,000",
      horsepower: "986 HP",
      acceleration: "2.5s",
      topSpeed: "211 mph",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Rosso Corsa",
      description: "Ferrari's first series-production PHEV packs a hybrid powertrain with staggering performance."
    },
    {
      id: 4,
      name: "McLaren 720S",
      price: "$299,000",
      horsepower: "710 HP",
      acceleration: "2.8s",
      topSpeed: "212 mph",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg",
      color: "Sarthe Grey",
      description: "Lightweight supercar with dihedral doors and aerospace-inspired design."
    },
    {
      id: 5,
      name: "Audi R8 V10 Performance",
      price: "$194,200",
      horsepower: "602 HP",
      acceleration: "3.2s",
      topSpeed: "205 mph",
      image: "https://hips.hearstapps.com/hmg-prod/images/2023-audi-r8-gt-front-three-quarters-motion-3-1664827965.jpg?crop=0.684xw:0.577xh;0.0321xw,0.281xh&resize=1200:*",
      color: "Daytona Gray",
      description: "Everyday supercar with quattro all-wheel drive and naturally aspirated V10 engine."
    },
    {
      id: 6,
      name: "BMW M8 Competition",
      price: "$133,995",
      horsepower: "617 HP",
      acceleration: "3.0s",
      topSpeed: "190 mph",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Brands Hatch Gray",
      description: "Luxury grand tourer with racetrack-ready performance capabilities."
    },
    {
      id: 7,
      name: "Mercedes-AMG GT R",
      price: "$162,900",
      horsepower: "577 HP",
      acceleration: "3.5s",
      topSpeed: "198 mph",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg/1024px-Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
      color: "Green Hell Magno",
      description: "The beast from Affalterbach with track-focused aerodynamics and performance."
    },
    {
      id: 8,
      name: "Nissan GT-R Nismo",
      price: "$210,740",
      horsepower: "600 HP",
      acceleration: "2.9s",
      topSpeed: "205 mph",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      color: "Pearl White",
      description: "Godzilla returns with enhanced aerodynamics and hand-built engine."
    },
    {
      id: 9,
      name: "Chevrolet Corvette Z06",
      price: "$106,395",
      horsepower: "670 HP",
      acceleration: "2.6s",
      topSpeed: "195 mph",
      image: "https://issimi-vehicles-cdn.b-cdn.net/publicamlvehiclemanagement/VehicleDetails/599/timestamped-1718824678864-2023%20Chevrolet%20Corvette%20Z06%20Coupe%203LZ_000008.jpg?width=3840&quality=75",
      color: "Arctic White",
      description: "American supercar with mid-engine configuration and track-proven performance."
    },
    {
      id: 10,
      name: "Aston Martin DBS Superleggera",
      price: "$316,300",
      horsepower: "715 HP",
      acceleration: "3.2s",
      topSpeed: "211 mph",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2018_Aston_Martin_DBS_Superleggera_V12_Automatic_5.2_Front.jpg/1024px-2018_Aston_Martin_DBS_Superleggera_V12_Automatic_5.2_Front.jpg",
      color: "Skyfall Silver",
      description: "British grand tourer with sublime elegance and brutal performance."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCar((prev) => (prev + 1) % sportsCars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextCar = () => {
    setCurrentCar((prev) => (prev + 1) % sportsCars.length);
  };

  const prevCar = () => {
    setCurrentCar((prev) => (prev - 1 + sportsCars.length) % sportsCars.length);
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏎️</span>
            <span className="logo-text">LUX-ZER-Y CARS</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#models" className="nav-link">Models</a>
            <a href="#performance" className="nav-link">Performance</a>
            <a href="#gallery" className="nav-link">Gallery</a>
       
          </div>

          <div className="nav-actions">
            
            <button className="cta-button primary" onClick={onNavigateToListing} >Buy Now</button>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <img 
            src={sportsCars[currentCar].image} 
            alt={sportsCars[currentCar].name}
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span>PREMIUM COLLECTION</span>
          </div>
          
          <h1 className="hero-title">
            {sportsCars[currentCar].name}
          </h1>
          
          <p className="hero-subtitle">
            {sportsCars[currentCar].description}
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">{sportsCars[currentCar].horsepower}</span>
              <span className="stat-label">Power</span>
            </div>
            <div className="stat">
              <span className="stat-value">{sportsCars[currentCar].acceleration}</span>
              <span className="stat-label">0-60 mph</span>
            </div>
            <div className="stat">
              <span className="stat-value">{sportsCars[currentCar].topSpeed}</span>
              <span className="stat-label">Top Speed</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="hero-cta primary">
              Discover More
              <span className="arrow">→</span>
            </button>
            <button className="hero-cta secondary">
              Starting at {sportsCars[currentCar].price}
            </button>
          </div>
        </div>

        {/* Car Navigation */}
        <div className="car-navigation">
          <button className="nav-arrow prev" onClick={prevCar}>
            ‹
          </button>
          <div className="car-indicators">
            {sportsCars.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentCar ? 'active' : ''}`}
                onClick={() => setCurrentCar(index)}
              />
            ))}
          </div>
          <button className="nav-arrow next" onClick={nextCar}>
            ›
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="models">
        <div className="container">
          <h2 className="section-title">Uncompromised Performance</h2>
          <p className="section-subtitle">
            Engineered for those who demand the extraordinary
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Acceleration that pushes you back in your seat with every launch</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision Handling</h3>
              <p>Advanced suspension and steering for unparalleled control</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Luxury Crafted</h3>
              <p>Hand-finished interiors with premium materials throughout</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Advanced Safety</h3>
              <p>Cutting-edge technology to protect what matters most</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <h2 className="section-title">Premium Collection</h2>
          <p className="section-subtitle">
            Explore our exclusive lineup of high-performance sports cars
          </p>
          
          <div className="gallery-grid">
            {sportsCars.map((car, index) => (
              <div key={car.id} className="gallery-card">
                <div className="gallery-image">
                  <img src={car.image} alt={car.name} />
                  <div className="gallery-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="gallery-content">
                  <h3>{car.name}</h3>
                  <p>{car.price}</p>
                  <div className="car-specs">
                    <span>{car.horsepower}</span>
                    <span>{car.acceleration}</span>
                    <span>{car.topSpeed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="performance" id="performance">
        <div className="container">
          <div className="performance-content">
            <div className="performance-text">
              <h2>Track-Ready Performance</h2>
              <p>Our sports cars are engineered to dominate both the road and the racetrack. With advanced aerodynamics, precision-tuned suspensions, and powerful braking systems, each vehicle delivers an unparalleled driving experience.</p>
              
              <div className="performance-stats">
                <div className="performance-stat">
                  <span className="stat-number">700+</span>
                  <span className="stat-label">Average Horsepower</span>
                </div>
                <div className="performance-stat">
                  <span className="stat-number">3.0s</span>
                  <span className="stat-label">0-60 mph Average</span>
                </div>
                <div className="performance-stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Top Speed (mph)</span>
                </div>
              </div>
            </div>
            
            <div className="performance-visual">
              <div className="rotating-car">
                <div className="car-3d"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Excellence?</h2>
            <p>Schedule your private test drive today and feel the difference</p>
            <div className="cta-buttons">
              <button className="cta-button primary large">Book Test Drive</button>
              <button className="cta-button secondary large">Virtual Tour</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-icon">🏎️</span>
                LUX-ZER-Y CARS
              </div>
              <p>Redefining automotive excellence since 2024</p>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">YouTube</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Explore</h4>
              <a href="#models">Models</a>
              <a href="#performance">Performance</a>
              <a href="#gallery">Gallery</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Elite Drive. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;