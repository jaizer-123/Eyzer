import React from "react";

// Base Card Component
const Card = ({ 
  children, 
  className = "",
  hover = false,
  padding = "p-6",
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-2xl shadow-lg border border-gray-100 
        transition-all duration-300
        ${hover ? "hover:shadow-2xl hover:-translate-y-1 cursor-pointer" : ""}
        ${padding}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

// Feature Card Variant
export const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <Card 
      hover 
      className={`text-center group ${className}`}
    >
      <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-2xl text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  );
};

// Car Card Variant
export const CarCard = ({ 
  car, 
  onOrder,
  className = "" 
}) => {
  const { image, title, description, price, category, features } = car;

  return (
    <Card 
      hover 
      className={`overflow-hidden group ${className}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features && (
          <div className="mb-4">
            <h5 className="font-semibold text-gray-800 mb-2">Key Features:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
              {features.length > 3 && (
                <li className="text-red-600 font-medium">
                  + {features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <div className="flex space-x-2">
            <button 
              onClick={() => onOrder(car)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm"
            >
              Order Now
            </button>
            <button className="text-gray-600 hover:text-red-600 font-medium text-sm border border-gray-300 px-3 py-2 rounded-lg hover:border-red-600 transition-colors">
              Details
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Stats Card Variant
export const StatsCard = ({ 
  number, 
  label, 
  icon,
  className = "" 
}) => {
  return (
    <Card className={`text-center ${className}`}>
      {icon && (
        <div className="text-3xl mb-3 text-red-600">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </Card>
  );
};

// Testimonial Card Variant
export const TestimonialCard = ({
  name,
  role,
  content,
  avatar,
  rating = 5,
  className = ""
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));

  return (
    <Card className={`${className}`}>
      <div className="flex items-center mb-4">
        {avatar && (
          <img 
            src={avatar} 
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
        )}
        <div>
          <h5 className="font-semibold text-gray-900">{name}</h5>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-3">
        {stars}
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </Card>
  );
};

export default Card;