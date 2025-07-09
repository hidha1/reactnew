import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '😍',
      iconBg: '#fff7ed',
      title: 'Nostalgic Flavors',
      description: 'Each bite brings back cherished memories of home, family gatherings, and Kerala festivals.'
    },
    {
      icon: '🌿',
      iconBg: '#f0fdf4',
      title: 'Premium Quality',
      description: 'Handpicked authentic ingredients from local Kerala artisans, preserving traditional recipes.'
    },
    {
      icon: '🌍',
      iconBg: '#fef3c7',
      title: 'Worldwide Delivery',
      description: 'Connecting hearts across continents - bringing Kerala to your doorstep wherever you are.'
    }
  ];

  return (
    <div className="min-h-screen bg-pattern">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="heading-font text-6xl font-black text-amber-600 mb-6 drop-shadow-lg">
            TASTE OF HOME, DELIVERED 🌴
          </h1>
          <p className="body-font text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Authentic Kerala snacks from all 14 districts, bringing back cherished memories of home 😍
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="playful-font inline-block px-8 py-4 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 bg-amber-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide hover:bg-amber-600">
              🥰 Order Your Box
            </button>
            <Link to="/kerala" className="colorful-btn px-10 py-5 text-lg font-bold rounded-2xl transform hover:scale-105">
              🌴 Explore Kerala
            </Link>
          </div>
        </div>
        
        <div className="text-center mb-16 mt-20">
          <h2 className="heading-font text-5xl font-bold text-amber-600 mb-6">Why Kalibah Touches Hearts? 💖</h2>
          <p className="playful-font text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We carefully curate <em>authentic</em> flavors from Kerala's 14 districts, delivering <strong>memories</strong> in every bite! 🌴
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="creative-card p-8 text-center group"
            >
              <div
                className="text-5xl mb-6 w-20 h-20 mx-auto rounded-full flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300"
                style={{ 
                  backgroundColor: feature.iconBg
                }}
              >
                {feature.icon}
              </div>
              <h3 className="heading-font text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
              <p className="body-font text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
