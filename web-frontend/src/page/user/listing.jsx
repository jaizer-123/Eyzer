import React, { useState } from "react";
import { CarCard } from "../../components/ui/card";
import PrimaryButton from "../../components/ui/primarybutton";

const Listing = ({ onNavigateToLanding }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Luxury sports car data matching your landing page theme
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
      description: "The pinnacle of sports car engineering with unmatched performance and luxury.",
      category: "Supercar",
      features: ["3.8L Twin-Turbo Flat-6", "640 HP", "0-60 in 2.6s", "PDK Transmission", "Carbon Ceramic Brakes", "Sport Chrono Package"]
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
      description: "Extreme design meets cutting-edge technology in this Italian masterpiece.",
      category: "Hypercar",
      features: ["6.5L V12 Engine", "759 HP", "ALA Aerodynamics", "Carbon Fiber Monocoque", "Pushrod Suspension", "Race Mode"]
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
      description: "Ferrari's first series-production PHEV packs a hybrid powertrain with staggering performance.",
      category: "Hypercar",
      features: ["4.0L Twin-Turbo V8 + 3 Motors", "986 HP", "All-Wheel Drive", "25km Electric Range", "eManettino", "Carbon Fiber Body"]
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
      description: "Lightweight supercar with dihedral doors and aerospace-inspired design.",
      category: "Supercar",
      features: ["4.0L Twin-Turbo V8", "710 HP", "Carbon Fiber Monocage", "Proactive Chassis Control", "Variable Drift Control", "Race Mode"]
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
      description: "Everyday supercar with quattro all-wheel drive and naturally aspirated V10 engine.",
      category: "Supercar",
      features: ["5.2L V10 Engine", "602 HP", "quattro AWD", "Magnetic Ride Suspension", "Audi Virtual Cockpit", "Dynamic Steering"]
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
      description: "Luxury grand tourer with racetrack-ready performance capabilities.",
      category: "Grand Tourer",
      features: ["4.4L Twin-Turbo V8", "617 HP", "M xDrive AWD", "Active M Differential", "Carbon Roof", "M Sport Exhaust"]
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
      description: "The beast from Affalterbach with track-focused aerodynamics and performance.",
      category: "Supercar",
      features: ["4.0L Twin-Turbo V8", "577 HP", "AMG TRACTION CONTROL", "Active Aerodynamics", "Rear-Wheel Steering", "Race Mode"]
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
      description: "Godzilla returns with enhanced aerodynamics and hand-built engine.",
      category: "Supercar",
      features: ["3.8L Twin-Turbo V6", "600 HP", "ATTESA E-TS AWD", "6-Piston Brembo Brakes", "Nismo-tuned Suspension", "Dry Carbon Fiber"]
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
      description: "American supercar with mid-engine configuration and track-proven performance.",
      category: "Supercar",
      features: ["5.5L Flat-Plane V8", "670 HP", "Z07 Performance Package", "Carbon Ceramic Brakes", "Magnetic Ride Control", "Carbon Fiber Aero"]
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
      description: "British grand tourer with sublime elegance and brutal performance.",
      category: "Grand Tourer",
      features: ["5.2L Twin-Turbo V12", "715 HP", "Carbon Fiber Body", "Active Suspension", "Bang & Olufsen Audio", "GT Sports Seats"]
    }
  ];

  const categories = ["all", "Supercar", "Hypercar", "Grand Tourer"];

  const filteredCars = selectedCategory === "all" 
    ? sportsCars 
    : sportsCars.filter(car => car.category === selectedCategory);

  const handleOrder = (car) => {
    setSelectedCar(car);
    setShowOrderModal(true);
  };

  const handleConfirmOrder = (orderData) => {
    // Handle order confirmation
    console.log("Order confirmed:", { ...selectedCar, ...orderData });
    setShowOrderModal(false);
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="navbar bg-white shadow-lg">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏎️</span>
            <span className="logo-text">LUX-ZER-Y CARS</span>
          </div>
          
          <div className="nav-actions">
            <button 
              className="cta-button primary mr-80" 
              onClick={onNavigateToLanding}
            >
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="hero-badge mb-4">
            <span>EXCLUSIVE COLLECTION</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Sports Cars
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our curated selection of the world's most exceptional high-performance vehicles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 mb-8">
              Filter our collection to find your perfect performance machine
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    selectedCategory === category 
                      ? 'bg-red-600 text-white shadow-lg transform scale-105' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Cars" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredCars.map(car => (
              <div key={car.id} className="gallery-card bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="gallery-image relative overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="gallery-overlay absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <button 
                      className="view-details-btn opacity-0 hover:opacity-100 transform translate-y-4 hover:translate-y-0 transition-all duration-300 bg-red-600 text-white px-6 py-3 rounded-full font-semibold"
                      onClick={() => handleOrder(car)}
                    >
                      Order Now
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.category}
                  </div>
                </div>
                
                <div className="gallery-content p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-red-600 text-2xl font-bold mb-3">{car.price}</p>
                  <p className="text-gray-600 text-sm mb-4">{car.description}</p>
                  
                  <div className="car-specs grid grid-cols-3 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-sm font-semibold text-gray-900">{car.horsepower}</div>
                      <div className="text-xs text-gray-600">Power</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-sm font-semibold text-gray-900">{car.acceleration}</div>
                      <div className="text-xs text-gray-600">0-60 mph</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-sm font-semibold text-gray-900">{car.topSpeed}</div>
                      <div className="text-xs text-gray-600">Top Speed</div>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full mt-4 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => handleOrder(car)}
                  >
                    Schedule Test Drive
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No cars found in this category.</p>
            </div>
          )}

          {/* Load More Button */}
          <div className="text-center">
            <button className="cta-button secondary px-8 py-4 text-lg">
              View More Exclusive Models
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LUX-ZER-Y CARS
            </h2>
            <p className="text-gray-300 text-lg">
              Unmatched service for the most discerning automotive enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Certified Pre-Owned</h3>
              <p className="text-gray-300">Rigorous 200-point inspection and warranty</p>
            </div>
            <div className="text-center">
              <div className="feature-icon text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Expert Service</h3>
              <p className="text-gray-300">Factory-trained technicians and genuine parts</p>
            </div>
            <div className="text-center">
              <div className="feature-icon text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Financing</h3>
              <p className="text-gray-300">Competitive rates and flexible terms</p>
            </div>
            <div className="text-center">
              <div className="feature-icon text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Global Delivery</h3>
              <p className="text-gray-300">Worldwide shipping and customs handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {showOrderModal && selectedCar && (
        <OrderModal 
          car={selectedCar}
          onConfirm={handleConfirmOrder}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </div>
  );
};

// Order Modal Component (Updated Design)
const OrderModal = ({ car, onConfirm, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    testDrive: true,
    financing: false,
    tradeIn: false,
    preferredContact: "email",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields");
      return;
    }
    onConfirm(formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-gray-900 to-black text-white rounded-t-2xl">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold">Inquire About {car.name}</h3>
              <p className="text-gray-300 mt-2">Complete your luxury car experience</p>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:text-red-400 text-3xl transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Car Summary */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
            <div className="flex items-center space-x-6">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-24 h-24 object-cover rounded-xl shadow-lg"
              />
              <div className="flex-1">
                <h4 className="font-bold text-2xl text-gray-900">{car.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{car.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-xl">{car.price}</span>
                  <div className="text-sm text-gray-500">
                    <span>{car.horsepower} • </span>
                    <span>{car.acceleration} • </span>
                    <span>{car.topSpeed}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Preferred Contact Method
              </label>
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h4 className="font-semibold text-gray-900 text-lg mb-4">Additional Services</h4>
            <label className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <input
                type="checkbox"
                name="testDrive"
                checked={formData.testDrive}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 w-5 h-5"
              />
              <span className="text-gray-700 font-medium">Schedule a private test drive</span>
            </label>
            <label className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <input
                type="checkbox"
                name="financing"
                checked={formData.financing}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 w-5 h-5"
              />
              <span className="text-gray-700 font-medium">I need premium financing assistance</span>
            </label>
            <label className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <input
                type="checkbox"
                name="tradeIn"
                checked={formData.tradeIn}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500 w-5 h-5"
              />
              <span className="text-gray-700 font-medium">I have a luxury vehicle to trade in</span>
            </label>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Additional Message or Special Requests
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 bg-white resize-none"
              placeholder="Any specific requirements, preferred contact times, or questions about customization options..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Submit Order
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-300 font-semibold text-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Listing;