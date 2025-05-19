import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Login(){
  const {setUser}= useContext(AppContext);
  const[email,setEmail]=useState(' ');
  const[password,setPassword]=useState('');
  const navigate = useNavigate();

  const handleLogin = async ()=>{
    try{
        const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
        email,
        password
        });
    
        setUser(res.data);
        navigate("/Products");
    }
    catch (error){
        alert("Login failed!");
    }
   
};
return(
    <div>
        <h2>Login</h2>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
        <button onClick={handleLogin}>Login</button>
    </div>
);
}
export default Login;