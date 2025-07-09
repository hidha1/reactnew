import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(9);

  const [products] = useState([
    {
      id: 1,
      name: "Product1 - Traditional Banana Chips",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d999?w=500&h=300&fit=crop",
      category: "snacks",
      description: "Crispy banana chips from Kottayam district, made with traditional Kerala recipes.",
      rating: 4.8
    },
    {
      id: 2,
      name: "Product2 - Coconut Burfi",
      price: "₹399",
      image: "https://images.unsplash.com/photo-1571167230351-de4ab80efc2b?w=500&h=300&fit=crop",
      category: "sweets",
      description: "Authentic coconut burfi from Thrissur, bringing back festival memories.",
      rating: 4.7
    },
    {
      id: 3,
      name: "Product3 - Murukku Spirals",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&h=300&fit=crop",
      category: "snacks",
      description: "Traditional murukku from Ernakulam, perfect teatime companion.",
      rating: 4.6
    },
    {
      id: 4,
      name: "Product4 - Jackfruit Chips",
      price: "₹349",
      image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&h=300&fit=crop",
      category: "snacks",
      description: "Sweet jackfruit chips from Palakkad, taste of Kerala summers.",
      rating: 4.5
    },
    {
      id: 5,
      name: "Product5 - Coconut Laddu",
      price: "₹379",
      image: "https://images.unsplash.com/photo-1571167230351-de4ab80efc2b?w=500&h=300&fit=crop",
      category: "sweets",
      description: "Traditional coconut laddu from Kozhikode, grandmother's recipe.",
      rating: 4.9
    },
    {
      id: 6,
      name: "Product6 - Tapioca Chips",
      price: "₹279",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d999?w=500&h=300&fit=crop",
      category: "snacks",
      description: "Crispy tapioca chips from Kannur, authentic Kerala flavors.",
      rating: 4.4
    }
  ]);

  const categories = ['snacks', 'sweets', 'beverages', 'spices'];

  const getEmoji = (category) => {
    const emojis = {
      snacks: '🍿',
      sweets: '🍰',
      beverages: '☕️',
      spices: '🌶️'
    };
    return emojis[category] || '🛍️';
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(displayCount + 3);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400 text-2xl">⭐</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400 text-2xl">⭐</span>);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300 text-2xl">⭐</span>);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-pattern py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="heading-font text-6xl font-black text-amber-600 mb-4">
            KERALA SNACK TREASURES! 🌴
          </h1>
          <p className="body-font text-2xl text-gray-600 leading-relaxed">
            Authentic flavors from all 14 districts of Kerala, delivered with love! 😍
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`playful-font px-6 py-3 rounded-2xl text-lg font-black transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === 'all' 
                  ? 'bg-amber-500 text-white shadow-lg hover:bg-amber-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } shadow-lg hover:shadow-xl uppercase tracking-wide`}
            >
              🌴 All Kerala Snacks
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`playful-font px-6 py-3 rounded-2xl text-lg font-black transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-lg hover:bg-amber-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } shadow-lg hover:shadow-xl uppercase tracking-wide`}
              >
                {getEmoji(category)} {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="creative-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="heading-font text-2xl font-black text-gray-900 mb-3">{product.name} ✨</h3>
                <p className="body-font text-gray-700 mb-6 text-lg leading-relaxed">{product.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="playful-font text-3xl font-black text-green-600">{product.price}</span>
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-3 playful-font text-lg font-bold text-gray-600">({product.rating})</span>
                  </div>
                </div>
                <button className="playful-font w-full py-4 px-6 rounded-2xl text-lg font-black transition-all duration-300 transform hover:scale-105 bg-orange-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide">
                  🥰 Add to Snack Box
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        {displayedProducts.length < filteredProducts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="playful-font px-8 py-4 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 bg-amber-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide hover:bg-amber-600"
            >
              🌴 Discover More Kerala Treasures
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
