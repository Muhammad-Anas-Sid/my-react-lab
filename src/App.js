import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;