import React from 'react';
import { Link } from 'react-router-dom';

const Kerala = () => {
  const districts = [
    {
      name: 'Thiruvananthapuram',
      route: 'thiruvananthapuram',
      emoji: '🏛️',
      specialty: 'Capital Heritage',
      color: 'bg-red-500'
    },
    {
      name: 'Kollam',
      route: 'kollam',
      emoji: '🌊',
      specialty: 'Backwater Beauty',
      color: 'bg-blue-500'
    },
    {
      name: 'Pathanamthitta',
      route: 'pathanamthitta',
      emoji: '⛪',
      specialty: 'Pilgrimage Land',
      color: 'bg-purple-500'
    },
    {
      name: 'Alappuzha',
      route: 'alappuzha',
      emoji: '🛶',
      specialty: 'Venice of East',
      color: 'bg-teal-500'
    },
    {
      name: 'Kottayam',
      route: 'kottayam',
      emoji: '📚',
      specialty: 'Land of Letters',
      color: 'bg-green-500'
    },
    {
      name: 'Idukki',
      route: 'idukki',
      emoji: '🏔️',
      specialty: 'Hill Station Paradise',
      color: 'bg-indigo-500'
    },
    {
      name: 'Ernakulam',
      route: 'ernakulam',
      emoji: '🏙️',
      specialty: 'Commercial Capital',
      color: 'bg-cyan-500'
    },
    {
      name: 'Thrissur',
      route: 'thrissur',
      emoji: '🎭',
      specialty: 'Cultural Capital',
      color: 'bg-pink-500'
    },
    {
      name: 'Palakkad',
      route: 'palakkad',
      emoji: '🌾',
      specialty: 'Rice Bowl',
      color: 'bg-yellow-500'
    },
    {
      name: 'Malappuram',
      route: 'malappuram',
      emoji: '🕌',
      specialty: 'Cultural Heritage',
      color: 'bg-emerald-500'
    },
    {
      name: 'Kozhikode',
      route: 'kozhikode',
      emoji: '🚢',
      specialty: 'City of Spices',
      color: 'bg-orange-500'
    },
    {
      name: 'Wayanad',
      route: 'wayanad',
      emoji: '🌿',
      specialty: 'Green Paradise',
      color: 'bg-lime-500'
    },
    {
      name: 'Kannur',
      route: 'kannur',
      emoji: '🏖️',
      specialty: 'Land of Looms',
      color: 'bg-rose-500'
    },
    {
      name: 'Kasaragod',
      route: 'kasaragod',
      emoji: '🏰',
      specialty: 'Land of Forts',
      color: 'bg-violet-500'
    }
  ];

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="heading-font text-7xl font-black text-amber-600 mb-8 drop-shadow-lg">
              DISCOVER KERALA 🌴
            </h1>
            <p className="body-font text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Welcome to "God's Own Country" - a land where emerald backwaters meet golden beaches, 
              where ancient traditions dance with modern life, and where every district tells a unique story 
              of culture, cuisine, and captivating beauty.
            </p>
          </div>

          {/* Kerala Story Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="creative-card rounded-3xl p-12 text-center">
              <h2 className="heading-font text-5xl font-bold text-amber-600 mb-8">
                The Story of Kerala ✨
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="body-font text-xl text-gray-700 leading-relaxed mb-6">
                    Kerala, the southernmost state of India, is a magical tapestry woven with 
                    <strong className="text-amber-600"> 14 unique districts</strong>, each contributing 
                    its own flavors, traditions, and stories to our beloved homeland.
                  </p>
                  <p className="body-font text-xl text-gray-700 leading-relaxed mb-6">
                    From the spice-scented hills of <em>Wayanad</em> to the tranquil backwaters of 
                    <em> Alappuzha</em>, from the cultural richness of <em>Thrissur</em> to the 
                    commercial vibrancy of <em>Ernakulam</em> - every corner holds memories that 
                    make our hearts sing with nostalgia.
                  </p>
                  <p className="playful-font text-2xl text-amber-600 font-bold">
                    🏡 Home is not just a place, it's a feeling... 💖
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-8xl mb-6">🌴</div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🛶 🏔️ 🌊</div>
                    <div className="text-4xl mb-2">🎭 🌾 🕌</div>
                    <div className="text-4xl">🏖️ 🏰 ⛪</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Districts Grid */}
          <div className="text-center mb-12">
            <h2 className="heading-font text-5xl font-bold text-amber-600 mb-6">
              Explore All 14 Districts 🗺️
            </h2>
            <p className="playful-font text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Click on any district to discover its unique flavors, stories, and the special snacks 
              that make it unforgettable. Each district is a treasure chest of memories! 
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {districts.map((district) => (
              <Link
                key={district.route}
                to={`/kerala/${district.route}`}
                className={`${district.color} hover:scale-105 transform transition-all duration-300 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl group`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {district.emoji}
                  </div>
                  <h3 className="heading-font text-lg font-black mb-2">
                    {district.name}
                  </h3>
                  <p className="body-font text-sm opacity-90">
                    {district.specialty}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="creative-card rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="heading-font text-4xl font-bold text-amber-600 mb-6">
                Ready to Taste Home? 🏠
              </h3>
              <p className="body-font text-xl text-gray-700 mb-8 leading-relaxed">
                Every snack in our Kalibah box carries the essence of these beautiful districts. 
                From banana chips that remind you of Kottayam's plantations to murukku that 
                brings back Ernakulam's festive spirits - we deliver memories, one bite at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/products" 
                  className="playful-font inline-block px-8 py-4 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 bg-amber-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide hover:bg-amber-600"
                >
                  🥰 Order Your Kerala Box
                </Link>
                <Link 
                  to="/" 
                  className="colorful-btn px-10 py-5 text-lg font-bold rounded-2xl transform hover:scale-105"
                >
                  🏠 Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kerala;
