import React from "react";
import "../../App.css";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 lg:px-20 xl:px-32 py-5 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            AutoElite
          </h1>
        </div>
        <div className="space-x-8 hidden md:flex items-center">
          <a href="#inventory" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Inventory</a>
          <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Features</a>
          <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">About</a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold shadow-md">
          Book Test Drive
        </button>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-20 md:py-32 gap-12">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>✨</span>
            <span>Premium Automotive Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Discover Your <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Dream Car</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Experience luxury, performance, and innovation with our curated collection of premium vehicles. 
            From sleek sports cars to sophisticated SUVs, find the perfect match for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg">
              Explore Inventory
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-300 font-semibold text-lg">
              View Offers
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-lg opacity-20"></div>
          <img
            src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Luxury car"
            className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500 relative z-10"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Premium Vehicles</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600">Brands Available</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Support Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose AutoElite</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Unmatched service, premium quality, and exceptional value in every vehicle we offer
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">Premium Quality</h4>
              <p className="text-gray-600 leading-relaxed">
                Every vehicle undergoes rigorous inspection and certification to ensure top-tier performance and reliability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">Best Value</h4>
              <p className="text-gray-600 leading-relaxed">
                Competitive pricing with flexible financing options tailored to meet your budget and lifestyle needs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                🛠️
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">Expert Service</h4>
              <p className="text-gray-600 leading-relaxed">
                Our certified technicians provide comprehensive maintenance and support for your complete peace of mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Inventory Preview */}
      <section id="inventory" className="w-full py-24 bg-white">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Inventory</h3>
            <p className="text-gray-600 text-lg">Discover our hand-picked selection of exceptional vehicles</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="BMW Sports Car" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">BMW M8 Competition</h4>
                <p className="text-gray-600 mb-4">Luxury sports coupe with exceptional performance</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$125,000</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Mercedes SUV" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Family
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Mercedes GLE</h4>
                <p className="text-gray-600 mb-4">Spacious luxury SUV with advanced safety features</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$89,000</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Car 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Audi Sedan" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Executive
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Audi A8 L</h4>
                <p className="text-gray-600 mb-4">Executive sedan with cutting-edge technology</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">$95,000</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white text-center py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready to Drive Your Dream Car?</h3>
          <p className="mb-10 text-lg text-red-100 max-w-2xl mx-auto">
            Schedule your test drive today and experience luxury automotive like never before. 
            Our experts are here to help you find the perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 font-bold px-10 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-lg">
              Book Test Drive
            </button>
            <button className="border-2 border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-12">
        <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg"></div>
                <h1 className="text-xl font-bold text-white">AutoElite</h1>
              </div>
              <p className="text-gray-400 text-sm">
                Premium automotive experience with exceptional service and quality vehicles.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#inventory" className="hover:text-white transition-colors">Inventory</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ info@autoelite.com</li>
                <li>📍 123 Automotive Drive, City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon-Fri: 9AM - 8PM</li>
                <li>Saturday: 10AM - 6PM</li>
                <li>Sunday: 11AM - 5PM</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm">© 2025 AutoElite. All rights reserved. Premium automotive services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;