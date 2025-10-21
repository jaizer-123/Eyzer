import React, { useState, useEffect } from "react";
import PrimaryButton from "../../components/ui/primarybutton";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("new");

  // Load orders from localStorage on component mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('autoEliteOrders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem('autoEliteOrders', JSON.stringify(orders));
  }, [orders]);

  // Sample orders for demonstration
  const sampleOrders = [
    {
      id: 1,
      car: {
        title: "BMW M8 Competition",
        price: "$125,000",
        image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      customer: {
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "+1 (555) 123-4567"
      },
      status: "confirmed",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-25",
      services: ["Test Drive", "Financing"]
    },
    {
      id: 2,
      car: {
        title: "Mercedes GLE",
        price: "$89,000",
        image: "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
      customer: {
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        phone: "+1 (555) 987-6543"
      },
      status: "pending",
      orderDate: "2024-01-16",
      deliveryDate: "2024-01-30",
      services: ["Trade-in"]
    }
  ];

  // Initialize with sample orders if no orders exist
  useEffect(() => {
    if (orders.length === 0) {
      setOrders(sampleOrders);
    }
  }, []);

  const filteredOrders = orders.filter(order => {
    switch (activeTab) {
      case "new":
        return order.status === "pending";
      case "confirmed":
        return order.status === "confirmed";
      case "delivered":
        return order.status === "delivered";
      default:
        return true;
    }
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const deleteOrder = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(prev => prev.filter(order => order.id !== orderId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Management</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Manage and track all your vehicle orders in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{orders.length}</div>
            <div className="text-gray-600">Total Orders</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {orders.filter(o => o.status === "pending").length}
            </div>
            <div className="text-gray-600">Pending</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {orders.filter(o => o.status === "confirmed").length}
            </div>
            <div className="text-gray-600">Confirmed</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {orders.filter(o => o.status === "delivered").length}
            </div>
            <div className="text-gray-600">Delivered</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {[
                { id: "all", name: "All Orders" },
                { id: "new", name: "New Orders" },
                { id: "confirmed", name: "Confirmed" },
                { id: "delivered", name: "Delivered" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center font-medium text-sm border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-red-500 text-red-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Orders List */}
          <div className="p-6">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🚗</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-500">There are no orders in this category.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredOrders.map(order => (
                  <div key={order.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      {/* Car Info */}
                      <div className="flex items-center space-x-4 flex-1">
                        <img
                          src={order.car.image}
                          alt={order.car.title}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{order.car.title}</h3>
                          <p className="text-red-600 font-bold text-lg">{order.car.price}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                            <span className="text-gray-500 text-sm">
                              Ordered: {order.orderDate}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Customer Info */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Customer Details</h4>
                        <p className="text-gray-600">{order.customer.name}</p>
                        <p className="text-gray-600 text-sm">{order.customer.email}</p>
                        <p className="text-gray-600 text-sm">{order.customer.phone}</p>
                      </div>

                      {/* Services */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {order.services?.map((service, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col space-y-2">
                        {order.status === "pending" && (
                          <>
                            <PrimaryButton
                              onClick={() => updateOrderStatus(order.id, "confirmed")}
                              className="px-4 py-2 text-sm"
                            >
                              Confirm Order
                            </PrimaryButton>
                            <button
                              onClick={() => deleteOrder(order.id)}
                              className="px-4 py-2 text-sm text-red-600 hover:text-red-700 font-medium"
                            >
                              Cancel
                            </button>
                          </>
                        )}
                        {order.status === "confirmed" && (
                          <PrimaryButton
                            onClick={() => updateOrderStatus(order.id, "delivered")}
                            className="px-4 py-2 text-sm"
                          >
                            Mark Delivered
                          </PrimaryButton>
                        )}
                        {order.status === "delivered" && (
                          <span className="text-green-600 font-medium text-sm">Completed</span>
                        )}
                      </div>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Order ID:</span>
                          <span className="ml-2 text-gray-600">#{order.id}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Order Date:</span>
                          <span className="ml-2 text-gray-600">{order.orderDate}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Est. Delivery:</span>
                          <span className="ml-2 text-gray-600">{order.deliveryDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <PrimaryButton onClick={() => window.print()}>
              Print Orders Report
            </PrimaryButton>
            <PrimaryButton variant="secondary" onClick={() => setOrders([])}>
              Clear All Orders
            </PrimaryButton>
            <button className="text-red-600 hover:text-red-700 font-medium">
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;