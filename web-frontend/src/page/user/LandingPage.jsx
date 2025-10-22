import React, { useState, useEffect } from 'react';
import '../../LandingPage.css';

const LandingPage = ({ onNavigateToListing }) => {
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
      name: "Bugatti Chiron Super Sport",
      price: "$3,900,000",
      horsepower: "1,600 HP",
      acceleration: "2.4s",
      topSpeed: "273 mph",
      image: "https://paisleyautocare.co.uk/cdn/shop/articles/da8f4193b2739bcefd7fce09c09d820d.jpg?v=1686642816&width=1600",
      color: "Jet Blue Carbon",
      description: "The ultimate hypercar representing the peak of automotive engineering and speed."
    },
    {
      id: 6,
      name: "Rolls-Royce Phantom",
      price: "$455,000",
      horsepower: "563 HP",
      acceleration: "5.1s",
      topSpeed: "155 mph",
      image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Diamond Black",
      description: "The epitome of luxury motoring with unparalleled comfort and craftsmanship."
    },
    {
      id: 7,
      name: "Bentley Continental GT Speed",
      price: "$245,000",
      horsepower: "650 HP",
      acceleration: "3.5s",
      topSpeed: "208 mph",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Mulliner Spectre",
      description: "Grand tourer combining British luxury with breathtaking performance."
    },
    {
      id: 8,
      name: "Aston Martin DBS Superleggera",
      price: "$316,300",
      horsepower: "715 HP",
      acceleration: "3.2s",
      topSpeed: "211 mph",
      image: "https://www.amarisupercars.com/blobs/stock/1241480/images/cdce4f56-3ba3-4b72-8a8d-bb89d44d9b8d.jpg?width=2000&height=1333",
      color: "Skyfall Silver",
      description: "British grand tourer with sublime elegance and brutal performance."
    },
    {
      id: 9,
      name: "Mercedes-Benz S-Class Maybach",
      price: "$184,900",
      horsepower: "496 HP",
      acceleration: "4.8s",
      topSpeed: "155 mph",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Obsidian Black",
      description: "Ultimate luxury sedan with first-class rear seating and cutting-edge technology."
    },
    {
      id: 10,
      name: "Lamborghini Huracán EVO",
      price: "$261,274",
      horsepower: "631 HP",
      acceleration: "2.9s",
      topSpeed: "202 mph",
      image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo/2022/10_06/over/hura_evo_over_01.jpg",
      color: "Verde Mantis",
      description: "The perfect combination of technology and design in a V10 masterpiece."
    },
    {
      id: 11,
      name: "Ferrari 812 Superfast",
      price: "$335,000",
      horsepower: "789 HP",
      acceleration: "2.9s",
      topSpeed: "211 mph",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      color: "Rosso Berlinetta",
      description: "The most powerful naturally aspirated production car engine ever built."
    },
    {
      id: 12,
      name: "Porsche Taycan Turbo S",
      price: "$185,000",
      horsepower: "750 HP",
      acceleration: "2.6s",
      topSpeed: "161 mph",
      image: "https://cdn.motor1.com/images/mgl/8ww1J/s1/2021-porsche-taycan-turbo-s.jpg",
      color: "Frozen Blue Metallic",
      description: "Electric sports sedan redefining performance with instant torque and precision."
    },
    {
      id: 13,
      name: "Audi R8 V10 Performance",
      price: "$194,200",
      horsepower: "602 HP",
      acceleration: "3.2s",
      topSpeed: "205 mph",
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
      color: "Daytona Gray",
      description: "Everyday supercar with quattro all-wheel drive and naturally aspirated V10 engine."
    },
    {
      id: 14,
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
      id: 15,
      name: "McLaren Artura",
      price: "$225,000",
      horsepower: "671 HP",
      acceleration: "3.0s",
      topSpeed: "205 mph",
      image: "https://mclaren.scene7.com/is/image/mclaren/P16FluxG34thFront_2?wid=1276&hei=718",
      color: "Ceramic Grey",
      description: "Next-generation hybrid supercar combining electric efficiency with V6 power."
    },
    {
      id: 16,
      name: "Lexus LC 500",
      price: "$93,000",
      horsepower: "471 HP",
      acceleration: "4.4s",
      topSpeed: "168 mph",
      image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      color: "Structural Blue",
      description: "Japanese luxury coupe with breathtaking design and naturally aspirated V8."
    },
    {
      id: 17,
      name: "Jaguar F-Type R",
      price: "$103,200",
      horsepower: "575 HP",
      acceleration: "3.5s",
      topSpeed: "186 mph",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2017_Jaguar_F-Type_V6_R-Dynamic_Automatic_3.0_Front.jpg/1200px-2017_Jaguar_F-Type_V6_R-Dynamic_Automatic_3.0_Front.jpg",
      color: "British Racing Green",
      description: "British sports car with iconic design and supercharged V8 performance."
    },
    {
      id: 18,
      name: "Maserati MC20",
      price: "$212,000",
      horsepower: "621 HP",
      acceleration: "2.9s",
      topSpeed: "202 mph",
      image: "https://www.europeanprestige.co.uk/blobs/stock/627/images/89c3b787-6389-4c0d-a95f-24f0a2c4c0b7/mc20-2.jpg?width=2000&height=1333",
      color: "Blu Infinito",
      description: "Italian mid-engine supercar featuring innovative Nettuno V6 engine technology."
    },
    {
      id: 19,
      name: "Koenigsegg Jesko Absolut",
      price: "$2,800,000",
      horsepower: "1,600 HP",
      acceleration: "2.5s",
      topSpeed: "330 mph",
      image: "https://www.thesupercarblog.com/wp-content/uploads/2025/04/Koenigsegg-Jesko-Absolut-Kronos-4-1-1000x600.jpg",
      color: "Crystal White",
      description: "The ultimate speed machine designed to break every production car record."
    },
    {
      id: 20,
      name: "Pagani Huayra BC",
      price: "$2,600,000",
      horsepower: "791 HP",
      acceleration: "2.8s",
      topSpeed: "238 mph",
      image: "https://en.wheelz.me/wp-content/uploads/2024/11/2017-Pagani-Huayra-BC-Coupe_1290414.webp",
      color: "Carbon Fiber",
      description: "Automotive artwork with unparalleled craftsmanship and hypercar performance."
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Acceleration that pushes you back in your seat with every launch"
    },
    {
      icon: "🎯",
      title: "Precision Handling",
      description: "Advanced suspension and steering for unparalleled control"
    },
    {
      icon: "💎",
      title: "Luxury Crafted",
      description: "Hand-finished interiors with premium materials throughout"
    },
    {
      icon: "🛡️",
      title: "Advanced Safety",
      description: "Cutting-edge technology to protect what matters most"
    }
  ];

  const services = [
    {
      title: "Custom Build",
      description: "Configure your dream car with our bespoke customization program",
      icon: "🔧"
    },
    {
      title: "Premium Financing",
      description: "Exclusive financing options for qualified buyers",
      icon: "💰"
    },
    {
      title: "Global Delivery",
      description: "We deliver anywhere in the world with white glove service",
      icon: "🌎"
    },
    {
      title: "Lifetime Support",
      description: "24/7 concierge service and lifetime warranty options",
      icon: "📞"
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
            <span className="logo-text">LUXURY CARS</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#models" className="nav-link">Models</a>
            <a href="#performance" className="nav-link">Performance</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#services" className="nav-link">Services</a>
          </div>

          <div className="nav-actions">
            <button className="cta-button primary" onClick={onNavigateToListing}>
              Buy Now
            </button>
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
            <button className="hero-cta primary" onClick={onNavigateToListing}>
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
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
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
            {sportsCars.map((car) => (
              <div key={car.id} className="gallery-card">
                <div className="gallery-image">
                  <img src={car.image} alt={car.name} />
                  <div className="gallery-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
                <div className="gallery-content">
                  <h3>{car.name}</h3>
                  <p className="price">{car.price}</p>
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

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Premium Services</h2>
          <p className="section-subtitle">
            Beyond exceptional vehicles, we offer unparalleled service
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
              <div className="performance-image">
                <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Performance" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The buying experience was exceptional. The team at Luxury Cars made everything seamless from selection to delivery."</p>
              </div>
              <div className="testimonial-author">
                <strong>James Wilson</strong>
                <span>Porsche 911 Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Unmatched performance and luxury. My Lamborghini exceeds all expectations every time I drive it."</p>
              </div>
              <div className="testimonial-author">
                <strong>Sarah Chen</strong>
                <span>Lamborghini Aventador Owner</span>
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
                LUXURY CARS
              </div>
              <p>Redefining automotive excellence with premium sports cars and exceptional service.</p>
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
              <a href="#services">Services</a>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Luxury Cars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;