import React, { useState } from 'react';
import { Menu, X, Home, Book, BarChart2, User } from 'lucide-react';
import Handbook from './Handbook';


const MyEUC: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Events');

  const menuItems = [
    { name: 'Events', icon: <Home size={20} /> },
    { name: 'Student Handbook', icon: <Book size={20} /> },
    { name: 'Analytics', icon: <BarChart2 size={20} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderContent = () => {
    switch (activeItem) {
      case 'Events':
        return <div>Events Content</div>;
      case 'Student Handbook':
        return <Handbook />;
      case 'Analytics':
        return <div>Analytics Content</div>;
      default:
        return <div>Select an item from the menu</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-md">
        <div className="p-4 flex items-center justify-center">
          {/* Logo placeholder */}
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-600">Logo</span>
          </div>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center w-full p-2 mt-2 rounded ${
                activeItem === item.name ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Upper bar */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold">myEUC Dashboard</h1>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User size={24} />
          </button>
        </header>

        {/* Mobile menu with transition */}
        <div 
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className={`bg-white h-full w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4 border-b flex justify-between items-center">
              {/* Logo placeholder */}
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">Logo</span>
              </div>
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <nav className="p-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center w-full p-2 mt-2 rounded ${
                    activeItem === item.name ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setActiveItem(item.name);
                    toggleMenu();
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default MyEUC;