import React from 'react';
import { useParams, Link } from 'react-router-dom';

const District = () => {
  const { districtName } = useParams();
  
  const districtData = {
    thiruvananthapuram: {
      name: 'Thiruvananthapuram',
      emoji: '🏛️',
      nickname: 'The Evergreen City of India',
      description: 'Capital of Kerala, home to magnificent palaces, beautiful beaches, and rich cultural heritage.',
      specialSnacks: ['Banana Chips', 'Coconut Burfi', 'Unniyappam'],
      famousFor: ['Padmanabhaswamy Temple', 'Kovalam Beach', 'Napier Museum'],
      story: 'Thiruvananthapuram, meaning "City of Lord Anantha", is where tradition meets modernity. The aroma of freshly made banana chips fills the air in local markets, while coconut burfi melts in your mouth like childhood memories.',
      color: 'red'
    },
    kollam: {
      name: 'Kollam',
      emoji: '🌊', 
      nickname: 'Gateway to Backwaters',
      description: 'Ancient port city famous for cashews, backwaters, and pristine beaches.',
      specialSnacks: ['Cashew Burfi', 'Kollam Halwa', 'Fish Curry Chips'],
      famousFor: ['Ashtamudi Lake', 'Kollam Beach', 'Cashew Processing'],
      story: 'Kollam has been trading spices and cashews for centuries. The sweet aroma of cashew burfi being prepared in traditional kitchens takes you back to monsoon evenings with family.',
      color: 'blue'
    },
    pathanamthitta: {
      name: 'Pathanamthitta',
      emoji: '⛪',
      nickname: 'Headquarters of Pilgrimage Tourism',
      description: 'Sacred land dotted with ancient temples and churches, known for its spiritual significance.',
      specialSnacks: ['Appam', 'Puttu', 'Ela Ada'],
      famousFor: ['Sabarimala Temple', 'Perunthenaruvi Waterfalls', 'Aranmula Kannadi'],
      story: 'Pathanamthitta is where faith meets flavors. The soft, pillowy appam served with spicy curry after a temple visit creates memories that last a lifetime.',
      color: 'purple'
    },
    alappuzha: {
      name: 'Alappuzha',
      emoji: '🛶',
      nickname: 'Venice of the East',
      description: 'Mesmerizing backwaters, houseboat cruises, and coir industry hub.',
      specialSnacks: ['Karimeen Curry', 'Toddy Shop Snacks', 'Rice Puttu'],
      famousFor: ['Backwater Tourism', 'Snake Boat Race', 'Coir Products'],
      story: 'Alappuzha backwaters carry stories in every ripple. Enjoying spicy karimeen curry on a houseboat while watching the sunset is pure magic that calls you home.',
      color: 'teal'
    },
    kottayam: {
      name: 'Kottayam',
      emoji: '📚',
      nickname: 'Land of Letters, Latex and Lakes',
      description: 'First fully literate district in India, known for rubber plantations and publishing industry.',
      specialSnacks: ['Traditional Banana Chips', 'Rubber Seed Curry', 'Kappa Chips'],
      famousFor: ['100% Literacy', 'Rubber Plantations', 'Kumarakom Bird Sanctuary'],
      story: 'Kottayam is where knowledge meets taste. The crispy banana chips from local plantations remind you of after-school snacks and the joy of learning.',
      color: 'green'
    },
    idukki: {
      name: 'Idukki',
      emoji: '🏔️',
      nickname: 'Spice Garden of Kerala',
      description: 'Hill station paradise with spice plantations, tea gardens, and the majestic Idukki Dam.',
      specialSnacks: ['Cardamom Tea', 'Spiced Banana Chips', 'Hill Honey'],
      famousFor: ['Idukki Dam', 'Spice Plantations', 'Munnar Hill Station'],
      story: 'Idukki hills whisper tales of spice traders. The fragrant cardamom tea paired with spiced banana chips creates memories of misty mornings and cool mountain air.',
      color: 'indigo'
    },
    ernakulam: {
      name: 'Ernakulam',
      emoji: '🏙️',
      nickname: 'Commercial Capital of Kerala',
      description: 'Bustling port city, commercial hub, and the heart of modern Kerala.',
      specialSnacks: ['Murukku', 'Mixture', 'Kochi Biscuits'],
      famousFor: ['Kochi Port', 'IT Hub', 'Chinese Fishing Nets'],
      story: 'Ernakulam pulses with energy and flavor. The spiral murukku from local tea shops brings back memories of evening snacks during busy city life.',
      color: 'cyan'
    },
    thrissur: {
      name: 'Thrissur',
      emoji: '🎭',
      nickname: 'Cultural Capital of Kerala',
      description: 'Land of festivals, classical arts, and the famous Thrissur Pooram.',
      specialSnacks: ['Coconut Burfi', 'Festival Sweets', 'Jaggery Snacks'],
      famousFor: ['Thrissur Pooram', 'Vadakkunnathan Temple', 'Classical Arts'],
      story: 'Thrissur resonates with drums and flavors. The sweet coconut burfi shared during Pooram celebrations carries the joy of festivals and family gatherings.',
      color: 'pink'
    },
    palakkad: {
      name: 'Palakkad',
      emoji: '🌾',
      nickname: 'Rice Bowl of Kerala',
      description: 'Agricultural heartland known for paddy fields, Palakkad Gap, and Tamil influence.',
      specialSnacks: ['Jackfruit Chips', 'Rice Snacks', 'Jaggery Sweets'],
      famousFor: ['Paddy Fields', 'Palakkad Fort', 'Silent Valley'],
      story: 'Palakkad fields stretch like golden carpets. The sweet jackfruit chips remind you of summer holidays in grandparents\' homes surrounded by lush green fields.',
      color: 'yellow'
    },
    malappuram: {
      name: 'Malappuram',
      emoji: '🕌',
      nickname: 'Land of Scholars and Spices',
      description: 'Rich Islamic heritage, educational institutions, and spice trade center.',
      specialSnacks: ['Ghee Rice Snacks', 'Haleem', 'Date Sweets'],
      famousFor: ['Islamic Heritage', 'Spice Trade', 'Educational Institutions'],
      story: 'Malappuram carries centuries of wisdom and taste. The aromatic ghee rice snacks bring back memories of Eid celebrations and scholarly discussions.',
      color: 'emerald'
    },
    kozhikode: {
      name: 'Kozhikode',
      emoji: '🚢',
      nickname: 'City of Spices',
      description: 'Historic port city where Vasco da Gama landed, famous for spices and Malabar cuisine.',
      specialSnacks: ['Malabar Mixture', 'Spiced Nuts', 'Kozhikode Halwa'],
      famousFor: ['Spice Trade History', 'Malabar Cuisine', 'Kappad Beach'],
      story: 'Kozhikode beaches witnessed history unfold. The spicy Malabar mixture carries tales of ancient spice routes and trading ships that connected worlds.',
      color: 'orange'
    },
    wayanad: {
      name: 'Wayanad',
      emoji: '🌿',
      nickname: 'Green Paradise',
      description: 'Pristine forests, wildlife sanctuaries, and tribal heritage in the Western Ghats.',
      specialSnacks: ['Honey Varieties', 'Forest Nuts', 'Tribal Sweets'],
      famousFor: ['Wildlife Sanctuary', 'Edakkal Caves', 'Tribal Heritage'],
      story: 'Wayanad forests hold ancient secrets. The pure forest honey and tribal sweets connect you to nature and the indigenous wisdom of the land.',
      color: 'lime'
    },
    kannur: {
      name: 'Kannur',
      emoji: '🏖️',
      nickname: 'Land of Looms and Lores',
      description: 'Beautiful beaches, handloom industry, and traditional Theyyam art form.',
      specialSnacks: ['Tapioca Chips', 'Fish Pickles', 'Coastal Snacks'],
      famousFor: ['Theyyam', 'Handloom Industry', 'Pristine Beaches'],
      story: 'Kannur beaches dance with Theyyam rhythms. The crispy tapioca chips remind you of coastal evenings and the mystical art forms that make hearts race.',
      color: 'rose'
    },
    kasaragod: {
      name: 'Kasaragod',
      emoji: '🏰',
      nickname: 'Land of Forts and Folklore',
      description: 'Northern gateway with ancient forts, multiple languages, and rich cultural diversity.',
      specialSnacks: ['Coastal Sweets', 'Multilingual Snacks', 'Fort Special Treats'],
      famousFor: ['Bekal Fort', 'Cultural Diversity', 'Multiple Languages'],
      story: 'Kasaragod stands guard at Kerala\'s northern border. The diverse coastal sweets represent the beautiful blend of cultures that call this land home.',
      color: 'violet'
    }
  };

  const district = districtData[districtName] || districtData.thiruvananthapuram;
  const colorClasses = {
    red: 'from-red-500 to-red-600 text-red-600',
    blue: 'from-blue-500 to-blue-600 text-blue-600',
    purple: 'from-purple-500 to-purple-600 text-purple-600',
    teal: 'from-teal-500 to-teal-600 text-teal-600',
    green: 'from-green-500 to-green-600 text-green-600',
    indigo: 'from-indigo-500 to-indigo-600 text-indigo-600',
    cyan: 'from-cyan-500 to-cyan-600 text-cyan-600',
    pink: 'from-pink-500 to-pink-600 text-pink-600',
    yellow: 'from-yellow-500 to-yellow-600 text-yellow-600',
    emerald: 'from-emerald-500 to-emerald-600 text-emerald-600',
    orange: 'from-orange-500 to-orange-600 text-orange-600',
    lime: 'from-lime-500 to-lime-600 text-lime-600',
    rose: 'from-rose-500 to-rose-600 text-rose-600',
    violet: 'from-violet-500 to-violet-600 text-violet-600'
  };

  return (
    <div className="min-h-screen bg-pattern">
      {/* Hero Section */}
      <div className={`py-20 bg-gradient-to-br ${colorClasses[district.color]?.split(' ')[0]} ${colorClasses[district.color]?.split(' ')[1]} to-amber-50`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-8xl mb-6">{district.emoji}</div>
            <h1 className="heading-font text-7xl font-black text-white mb-4 drop-shadow-lg">
              {district.name}
            </h1>
            <p className="playful-font text-3xl text-white mb-8 opacity-90">
              {district.nickname}
            </p>
            <p className="body-font text-xl text-white max-w-3xl mx-auto leading-relaxed opacity-90">
              {district.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* District Story */}
            <div className="creative-card rounded-3xl p-12 mb-12">
              <h2 className={`heading-font text-4xl font-bold ${colorClasses[district.color]?.split(' ')[2]} mb-8 text-center`}>
                The Story of {district.name} 📖
              </h2>
              <p className="body-font text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                {district.story}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Special Snacks */}
              <div className="creative-card rounded-2xl p-8">
                <h3 className={`heading-font text-2xl font-bold ${colorClasses[district.color]?.split(' ')[2]} mb-6`}>
                  🍿 Special Snacks
                </h3>
                <ul className="space-y-3">
                  {district.specialSnacks.map((snack, index) => (
                    <li key={index} className="body-font text-lg text-gray-700 flex items-center">
                      <span className="text-amber-500 mr-3">•</span>
                      {snack}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Famous For */}
              <div className="creative-card rounded-2xl p-8">
                <h3 className={`heading-font text-2xl font-bold ${colorClasses[district.color]?.split(' ')[2]} mb-6`}>
                  ⭐ Famous For
                </h3>
                <ul className="space-y-3">
                  {district.famousFor.map((item, index) => (
                    <li key={index} className="body-font text-lg text-gray-700 flex items-center">
                      <span className="text-amber-500 mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="creative-card rounded-3xl p-12">
                <h3 className="heading-font text-4xl font-bold text-amber-600 mb-6">
                  Missing {district.name}? 🏠
                </h3>
                <p className="body-font text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Let Kalibah bring the authentic flavors of {district.name} to your doorstep. 
                  Every bite is a journey back home, every snack a cherished memory.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to="/products" 
                    className="playful-font inline-block px-8 py-4 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 bg-amber-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide hover:bg-amber-600"
                  >
                    🥰 Order {district.name} Box
                  </Link>
                  <Link 
                    to="/kerala" 
                    className="colorful-btn px-10 py-5 text-lg font-bold rounded-2xl transform hover:scale-105"
                  >
                    🌴 Back to Kerala
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default District;
