import React from 'react';
import Greeting from './Greeting';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Content />
      <Footer />
    </div>
  );
}

export default App;