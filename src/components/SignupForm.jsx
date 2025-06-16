import {useState} from 'react';

const SignupForm =()=>{
    const[formData,setFormData]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",

    });
    const[errors,setErrors]=useState({});

    const handleChange=(e)=>{
        setFormData((prev)=>({...prev,[e.target.name]: e.target.value}));

    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const validationErrors={};

        if(!formData.firstName.trim()) validationErrors.firstName = "First name is required";
        if(!formData.lastName.trim()) validationErrors.lastName="Last name is required";
        if(!formData.email) validationErrors.email= "Email is required";
        else if(!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email="invalid email";

        if(!formData.password) validationErrors.password="Password is required";
        else if(!formData.password.length<6) validationErrors.password="Minimum 6 characters";

        setErrors(validationErrors);

        if(Objects.key(validationErrors).length===0){
            console.log("Signup submitted:", formData);
        }
    };
   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10 animate-fade-in">
        <h2 className="text-2xl font-bold text-indigo-700 text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Login
          </a>
        </p>

        
      </div>
    </div>
  );
};

export default SignupForm;