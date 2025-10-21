import React, { useState } from "react";
import { CarCard } from "../../components/ui/card";
import PrimaryButton from "../../components/ui/primarybutton";

const CarListing = ({ onOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // Sample car data
  const cars = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "BMW M8 Competition",
      description: "Luxury sports coupe with exceptional performance",
      price: "$125,000",
      category: "Premium",
      features: ["4.4L V8 Engine", "617 HP", "0-60 in 3.0s", "Carbon Fiber Roof", "Leather Interior", "Heated Seats"]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mercedes GLE",
      description: "Spacious luxury SUV with advanced safety features",
      price: "$89,000",
      category: "Family",
      features: ["3.0L Inline-6", "362 HP", "7-Seater", "Air Suspension", "Panoramic Roof", "Premium Sound System"]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Audi A8 L",
      description: "Executive sedan with cutting-edge technology",
      price: "$95,000",
      category: "Executive",
      features: ["3.0L V6", "335 HP", "Quattro AWD", "Massage Seats", "Virtual Cockpit", "Bang & Olufsen Audio"]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Porsche 911 Turbo S",
      description: "Iconic sports car with breathtaking performance",
      price: "$215,000",
      category: "Premium",
      features: ["3.8L Twin-Turbo", "640 HP", "0-60 in 2.6s", "Carbon Ceramic Brakes", "Sport Chrono", "Active Aero"]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Range Rover Sport",
      description: "Luxury SUV with exceptional off-road capability",
      price: "$85,000",
      category: "Family",
      features: ["3.0L Supercharged", "355 HP", "Terrain Response", "Panoramic Roof", "Meridian Audio", "Air Suspension"]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Lexus LS 500",
      description: "Ultra-luxury sedan with impeccable craftsmanship",
      price: "$78,000",
      category: "Executive",
      features: ["3.5L Twin-Turbo", "416 HP", "Mark Levinson Audio", "Executive Seating", "24" ,"Wheels", "Heads-up Display"]
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/358189/pexels-photo-358189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tesla Model S Plaid",
      description: "Electric performance sedan with insane acceleration",
      price: "$110,000",
      category: "Premium",
      features: ["Tri-Motor AWD", "1,020 HP", "0-60 in 1.99s", "390mi Range", "Autopilot", "17" ,"Touchscreen"]
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/3727451/pexels-photo-3727451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Toyota Land Cruiser",
      description: "Legendary off-road SUV with unmatched reliability",
      price: "$65,000",
      category: "Family",
      features: ["5.7L V8", "381 HP", "4WD System", "8-Seater", "Multi-Terrain Select", "Cool Box"]
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Jaguar F-Type R",
      description: "British sports car with elegant design and power",
      price: "$105,000",
      category: "Premium",
      features: ["5.0L Supercharged V8", "575 HP", "Active Exhaust", "Torque Vectoring", "12.3" ,"Digital Cluster", "Sport Seats"]
    }
  ];

  const categories = ["all", "Premium", "Family", "Executive"];

  const filteredCars = selectedCategory === "all" 
    ? cars 
    : cars.filter(car => car.category === selectedCategory);

  const handleOrder = (car) => {
    setSelectedCar(car);
    setShowOrderModal(true);
  };

  const handleConfirmOrder = (orderData) => {
    onOrder({ ...selectedCar, ...orderData });
    setShowOrderModal(false);
    setSelectedCar(null);
  };

  return (
    <section id="inventory" className="w-full py-24 bg-white">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Inventory
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Discover our hand-picked selection of exceptional vehicles
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <PrimaryButton
                key={category}
                variant={selectedCategory === category ? "primary" : "secondary"}
                className="capitalize"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </PrimaryButton>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard 
              key={car.id} 
              car={car} 
              onOrder={handleOrder}
            />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cars found in this category.</p>
          </div>
        )}

        {/* Show More Button */}
        <div className="text-center mt-12">
          <PrimaryButton variant="secondary" className="px-8 py-3">
            Load More Vehicles
          </PrimaryButton>
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && selectedCar && (
        <OrderModal 
          car={selectedCar}
          onConfirm={handleConfirmOrder}
          onClose={() => setShowOrderModal(false)}
        />
      )}
    </section>
  );
};

// Order Modal Component
const OrderModal = ({ car, onConfirm, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    testDrive: false,
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">Order {car.title}</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mt-2">Complete your purchase request</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Car Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-4">
              <img 
                src={car.image} 
                alt={car.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{car.title}</h4>
                <p className="text-gray-600 text-sm">{car.description}</p>
                <p className="text-red-600 font-bold text-lg">{car.price}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <select
                name="preferredContact"
                value={formData.preferredContact}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="font-semibold text-gray-900">Additional Services</h4>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="testDrive"
                checked={formData.testDrive}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-700">Schedule a test drive</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="financing"
                checked={formData.financing}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-700">I need financing assistance</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="tradeIn"
                checked={formData.tradeIn}
                onChange={handleChange}
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-gray-700">I have a vehicle to trade in</span>
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message or Special Requests
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              placeholder="Any specific requirements, questions, or preferred contact times..."
            />
          </div>

          <div className="flex gap-4">
            <PrimaryButton type="submit" className="flex-1 py-3">
              Submit Order Request
            </PrimaryButton>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-300 font-semibold"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarListing;