import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Products from './components/Products' 
import Login from './components/Login'
import FormDetails from './components/FormDetails'
import FormPage from './components/Formpage'
import {AppProvider} from './context/AppContext'

function App(){
  return(
    <AppProvider>
      <Router>
        <Routes>
          <Route path= "/" element={<Login/>} />
          <Route path="/Products" element={<Products />} />
          <Route path ="/form" element={<FormPage />} />
          <Route path = "/form-details" element={<FormDetails />} />
          </Routes>
      </Router>
    </AppProvider>
  );
}
export default App;
