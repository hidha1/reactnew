import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup data:', formData);
    // Add signup logic here
  };

  return (
    <div className="min-h-screen bg-pattern flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="heading-font text-5xl font-black text-amber-600 text-center mb-8">JOIN OUR KERALA FAMILY! 🌴</h2>
          <p className="mt-2 playful-font text-lg text-gray-700">
            Ready to taste authentic Kerala memories? Or{' '}
            <Link to="/login" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-500 hover:to-amber-500 transition-all duration-300">
              sign in to your Kalibah account
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="creative-card py-10 px-8 shadow-2xl" style={{boxShadow: '0 20px 0 #4ecdc4, 0 40px 0 #ffe66d, 0 60px 0 #ff6b9d, 0 80px 40px rgba(0,0,0,0.15)'}}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 appearance-none block w-full px-4 py-3 border-2 border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-400 body-font text-base transition-all duration-300"
                    placeholder="John"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block playful-font text-base font-bold text-gray-800 mb-2">
                  👤 Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 appearance-none block w-full px-4 py-3 border-2 border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-400 body-font text-base transition-all duration-300"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block playful-font text-base font-bold text-gray-800 mb-2">
                📧 Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 appearance-none block w-full px-4 py-3 border-2 border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-400 body-font text-base transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block playful-font text-base font-bold text-gray-800 mb-2">
                🔒 Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 appearance-none block w-full px-4 py-3 border-2 border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-400 body-font text-base transition-all duration-300"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block playful-font text-base font-bold text-gray-800 mb-2">
                🔐 Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 appearance-none block w-full px-4 py-3 border-2 border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-400 body-font text-base transition-all duration-300"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded-md"
              />
              <label htmlFor="agree-terms" className="ml-3 block playful-font text-base font-semibold text-gray-900">
                I agree to the{' '}
                <a href="#" className="font-bold text-amber-600 hover:text-amber-700 transition-all duration-300">
                  Terms and Conditions ✨
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="playful-font group relative w-full flex justify-center py-4 px-6 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 bg-amber-500 text-white shadow-lg hover:shadow-xl uppercase tracking-wide hover:bg-amber-600"
              >
                🌴 Join Kalibah Family
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-300" />
              </div>
              <div className="relative flex justify-center text-lg">
                <span className="px-4 bg-white playful-font font-bold text-gray-700">✨ Or sign up with ✨</span>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="playful-font w-full inline-flex justify-center py-3 px-4 rounded-2xl text-base font-bold bg-red-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="sr-only">Sign up with Google</span>
              🔍 Google
            </button>
            <button className="playful-font w-full inline-flex justify-center py-3 px-4 rounded-2xl text-base font-bold bg-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="sr-only">Sign up with Facebook</span>
              📘 Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
